import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const token = request.headers.get("x-revalidate-token");

  if (!process.env.REVALIDATE_TOKEN || token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { paths } = (await request.json()) as { paths?: string[] };
    const targets = paths ?? ["/", "/blog", "/seminars", "/downloads"];

    for (const p of targets) {
      revalidatePath(p);
    }

    return NextResponse.json({ success: true, revalidated: targets });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid body" }, { status: 400 });
  }
}
