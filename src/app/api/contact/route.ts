import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkRateLimit } from '@/lib/rateLimit';

/**
 * Escapes raw string input to prevent HTML injection in emails.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

    // Rate Limiting: Max 3 submissions per 10 minutes per IP
    const rateLimit = checkRateLimit(ip, 'contact', 3, 10 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: 'Too many contact requests. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, website } = body;

    // Honeypot bot check: if hidden website field is filled out, silently drop bot spam
    if (website && String(website).trim() !== '') {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    }

    // Input Validation & Length Bounds
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ success: false, message: 'Please provide your name.' }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json({ success: false, message: 'Name must not exceed 100 characters.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json({ success: false, message: 'Please provide your email address.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()) || email.length > 100) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ success: false, message: 'Please enter a message.' }, { status: 400 });
    }
    if (message.length > 3000) {
      return NextResponse.json({ success: false, message: 'Message must not exceed 3,000 characters.' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || 'tahatabassum9@gmail.com';

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json({
        success: true,
        message: 'Message received! (Dev mode: Configure RESEND_API_KEY to send real emails via Resend).',
      });
    }

    // HTML Entity Escaping for email body safety
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: recipientEmail,
      subject: `New Portfolio Inquiry from ${safeName}`,
      replyTo: safeEmail,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Portfolio Inquiry</h2>
          <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${safeName}</p>
          <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <h3 style="color: #0f172a; margin-bottom: 8px;">Message:</h3>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 14px;">
            ${safeMessage}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Thank you! Your message has been sent successfully.' });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    // Generic error message without leaking stack traces or API details
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
