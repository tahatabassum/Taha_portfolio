interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * In-memory rate limiter helper for serverless API routes.
 * @param ip Client IP address
 * @param key Unique identifier key (e.g. 'login' or 'contact')
 * @param limit Maximum allowed requests in window
 * @param windowMs Time window in milliseconds
 */
export function checkRateLimit(
  ip: string,
  key: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number; resetTime: number } {
  const identifier = `${key}:${ip}`;
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up expired records periodically
  if (rateLimitMap.size > 10000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (v.resetTime < now) rateLimitMap.delete(k);
    }
  }

  if (!record || record.resetTime < now) {
    const newRecord: RateLimitRecord = { count: 1, resetTime: now + windowMs };
    rateLimitMap.set(identifier, newRecord);
    return { allowed: true, remaining: limit - 1, resetTime: newRecord.resetTime };
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count, resetTime: record.resetTime };
}
