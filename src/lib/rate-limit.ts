/**
 * A minimal fixed-window rate limiter held in process memory.
 *
 * This is a speed bump, not a security control: every serverless instance keeps
 * its own counters, so a horizontally scaled deployment multiplies the limit by
 * the instance count. It is enough to stop a single script hammering the
 * contact form. Move to a shared store (Upstash, Redis) if that stops being
 * true.
 */

type Window = { count: number; expiresAt: number };

const windows = new Map<string, Window>();

/** Drops expired entries so the map cannot grow without bound. */
function evictExpired(now: number) {
  for (const [key, window] of windows) {
    if (window.expiresAt <= now) windows.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  evictExpired(now);

  const existing = windows.get(key);

  if (!existing) {
    windows.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.expiresAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Best-effort client identifier from proxy headers. */
export function clientIdentifier(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
