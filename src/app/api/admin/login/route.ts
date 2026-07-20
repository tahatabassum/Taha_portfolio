import { NextResponse } from 'next/server';
import { timingSafeEqualString } from '@/lib/auth';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request: Request) {
  try {
    // Extract IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    
    // Check rate limit: 5 login attempts per 15 minutes
    const rateLimit = checkRateLimit(ip, 'login', 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const { password } = await request.json();
    if (!password || typeof password !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD || 'admin@123456tt@p';

    if (timingSafeEqualString(password, adminPassword)) {
      const response = NextResponse.json({ success: true, message: 'Authenticated successfully' });
      const sessionToken = Buffer.from(adminPassword).toString('base64');
      
      response.cookies.set('admin_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    }

    // Generic error message to prevent enumeration
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 500 });
  }
}
