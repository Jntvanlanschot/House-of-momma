import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Prepare email content
    const emailSubject = `Nieuwe aanvraag – ${trip} – House of Momma`;
    
    const emailContent = `
      <h2>Nieuwe aanvraag via House of Momma website</h2>
      
      <h3>Contactgegevens:</h3>
      <ul>
        <li><strong>Naam:</strong> ${firstName} ${lastName}</li>
        <li><strong>E-mail:</strong> ${email}</li>
        <li><strong>Telefoon:</strong> ${body.phone || 'Niet opgegeven'}</li>
      </ul>
      
      <h3>Trip details:</h3>
      <ul>
        <li><strong>Gekozen trip:</strong> ${trip}</li>
        <li><strong>Gewenste periode:</strong> ${body.period || 'Niet opgegeven'}</li>
      </ul>
      
      ${body.message ? `
      <h3>Bericht:</h3>
      <p>${body.message}</p>
      ` : ''}
      
      <hr>
      <p><small>
        Verzonden op: ${new Date().toLocaleString('nl-NL')}<br>
        IP-adres: ${ip}
      </small></p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || 'noreply@houseofmomma.com',
      to: [process.env.CONTACT_TO || 'info@houseofmomma.com'],
      subject: emailSubject,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Er ging iets mis bij het versturen van de e-mail' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, messageId: data?.id });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden' },
      { status: 500 }
    );
  }
}
