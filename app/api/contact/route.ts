import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  role: string;
  instagram?: string;
  website?: string;
  musicLink?: string;
  spotify?: string;
  youtube?: string;
  soundcloud?: string;
  eventLink?: string;
  goal: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.role || !body.goal || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If Resend API key is not configured, just return success (demo mode)
    if (!process.env.RESEND_API_KEY) {
      console.log('Form submission received (email disabled - no API key configured):', body);
      return NextResponse.json(
        { success: true, message: 'Submission received successfully' },
        { status: 200 }
      );
    }

    // Import Resend only when needed
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format the email content
    const emailContent = `
New Contact Form Submission from Ragam & Co.

From: ${body.name}
Email: ${body.email}
Role: ${body.role}
Goal: ${body.goal}

Website: ${body.website || 'Not provided'}
Instagram: ${body.instagram || 'Not provided'}
Spotify: ${body.spotify || 'Not provided'}
YouTube: ${body.youtube || 'Not provided'}
SoundCloud: ${body.soundcloud || 'Not provided'}
Music Link: ${body.musicLink || 'Not provided'}
Event Link: ${body.eventLink || 'Not provided'}

Message:
${body.message}
    `;

    // Send email to Ragam team
    const teamEmailResponse = await resend.emails.send({
      from: 'Ragam & Co. <noreply@ragamco.com>',
      to: process.env.RAGAM_EMAIL || 'team@ragamco.com',
      subject: `New Contact Form Submission - ${body.name}`,
      text: emailContent,
    });

    if (teamEmailResponse.error) {
      console.error('Error sending team email:', teamEmailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationResponse = await resend.emails.send({
      from: 'Ragam & Co. <noreply@ragamco.com>',
      to: body.email,
      subject: 'We Received Your Request - Ragam & Co.',
      text: `Hi ${body.name},

Thank you for reaching out to Ragam & Co. We've received your request and will review your information carefully.

Our team will be in touch within 48 hours to discuss how we can best support your music journey.

In the meantime, feel free to explore more on our website: https://ragamco.com

Best regards,
The Ragam & Co. Team
      `,
    });

    if (confirmationResponse.error) {
      console.error('Error sending confirmation email:', confirmationResponse.error);
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
