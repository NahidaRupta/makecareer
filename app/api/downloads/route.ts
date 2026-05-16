import { type NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { downloadSchema } from "@/lib/validations/download";
import { prisma } from "@/lib/db";
import { getDownloadBySlug } from "@/lib/data/downloads";
import {
  sendDownloadConfirmation,
  sendDownloadNotification,
} from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request);
    const { ok } = rateLimit(`download:${ip}`, 10);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a moment." },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const data = downloadSchema.parse(body);

    if (data._hp) {
      return NextResponse.json({ success: true });
    }

    const resource = getDownloadBySlug(data.resourceSlug);
    if (!resource) {
      return NextResponse.json(
        { success: false, error: "The requested resource could not be found." },
        { status: 404 },
      );
    }

    await prisma.downloadLead.create({
      data: {
        name: data.name,
        email: data.email,
        resourceSlug: data.resourceSlug,
        ipAddress: ip,
      },
    });

    await Promise.allSettled([
      sendDownloadConfirmation(data.email, data.name, resource.titleJa),
      sendDownloadNotification({
        name: data.name,
        email: data.email,
        resourceSlug: data.resourceSlug,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: "Please check your input and try again.", details: error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    console.error("[api/downloads]", error);
    return NextResponse.json(
      { success: false, error: "A server error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
