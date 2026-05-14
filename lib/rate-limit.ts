interface Record {
  count: number;
  resetAt: number;
}

const store = new Map<string, Record>();

const WINDOW_MS = 60_000;

export function rateLimit(key: string, limit: number): { ok: boolean; remaining: number } {
  const now = Date.now();
  const rec = store.get(key);

  if (!rec || now > rec.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: limit - 1 };
  }

  if (rec.count >= limit) {
    return { ok: false, remaining: 0 };
  }

  rec.count += 1;
  return { ok: true, remaining: limit - rec.count };
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}
