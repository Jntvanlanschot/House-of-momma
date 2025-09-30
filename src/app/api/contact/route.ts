import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Te veel aanvragen. Probeer het later opnieuw.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Validate required fields
    const { firstName, lastName, email, trip } = body;
    
    if (!firstName || !lastName || !email || !trip) {
      return NextResponse.json(
        { error: 'Verplichte velden ontbreken' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Log the form submission (for development/debugging)
    console.log('Form submission received:', {
      firstName,
      lastName,
      email,
      trip,
      phone: body.phone,
      period: body.period,
      message: body.message,
      timestamp: new Date().toISOString(),
      ip
    });

    // Simulate successful submission
    // TODO: Add email functionality later with Resend
    return NextResponse.json({ 
      ok: true, 
      message: 'Form submitted successfully (email functionality coming soon)' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden' },
      { status: 500 }
    );
  }
}
