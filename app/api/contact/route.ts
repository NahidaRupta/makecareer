import { type NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validations/contact";
import { prisma } from "@/lib/db";
import {
  sendContactConfirmation,
  sendContactNotification,
} from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request);
    const { ok } = rateLimit(`contact:${ip}`, 5);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a moment." },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const data = contactSchema.parse(body);

    if (data._hp) {
      return NextResponse.json({ success: true });
    }

    await prisma.contactLead.create({
      data: {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        serviceInterest: data.serviceInterest,
        message: data.message,
        ipAddress: ip,
        userAgent: request.headers.get("user-agent") ?? undefined,
        source: request.headers.get("referer") ?? "direct",
      },
    });

    await Promise.allSettled([
      sendContactConfirmation(data.email, data.name),
      sendContactNotification({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        serviceInterest: data.serviceInterest,
        message: data.message,
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
    console.error("[api/contact]", error);
    return NextResponse.json(
      { success: false, error: "A server error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
