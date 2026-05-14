import { type NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { newsletterSchema } from "@/lib/validations/newsletter";
import { prisma } from "@/lib/db";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request);
    const { ok } = rateLimit(`newsletter:${ip}`, 3);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "リクエストが多すぎます。" },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const data = newsletterSchema.parse(body);

    if (data._hp) {
      return NextResponse.json({ success: true });
    }

    await prisma.newsletterSubscriber.upsert({
      where: { email: data.email },
      create: { email: data.email, source: data.source, status: "ACTIVE" },
      update: { status: "ACTIVE" },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: "有効なメールアドレスを入力してください。" },
        { status: 400 },
      );
    }
    console.error("[api/newsletter]", error);
    return NextResponse.json(
      { success: false, error: "サーバーエラーが発生しました。" },
      { status: 500 },
    );
  }
}
