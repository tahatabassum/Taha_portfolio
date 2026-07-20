import { cookies } from 'next/headers';
import crypto from 'crypto';

/**
 * Perform constant-time string comparison to prevent timing side-channel attacks.
 */
export function timingSafeEqualString(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf-8');
  const bufB = Buffer.from(b, 'utf-8');

  if (bufA.length !== bufB.length) {
    // Perform dummy timingSafeEqual to normalize execution timing
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Server-side check verifying if current request has a valid admin session cookie.
 */
export function isAdminAuthenticated(): boolean {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('admin_session')?.value;
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin@123456tt@p';
  
  if (!sessionToken) return false;
  
  const expectedToken = Buffer.from(adminPassword).toString('base64');
  return timingSafeEqualString(sessionToken, expectedToken);
}
