import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

// Rate limiting (simple in-memory store)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // 5 requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
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
        { error: 'Muitas tentativas. Tente novamente em 1 hora.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate input
    const validatedData = contactFormSchema.parse(body);

    // TODO: Replace with your email service configuration
    // Option 1: Using Nodemailer with SMTP
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova consulta - ${validatedData.name}`,
      html: `
        <h2>Nova solicitação de consulta</h2>
        <p><strong>Nome:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefone:</strong> ${validatedData.phone}</p>
        <p><strong>Data preferida:</strong> ${validatedData.preferredDate || 'Não especificada'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${validatedData.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    */

    // Option 2: Using SendGrid
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Nova consulta - ${validatedData.name}`,
      html: `
        <h2>Nova solicitação de consulta</h2>
        <p><strong>Nome:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefone:</strong> ${validatedData.phone}</p>
        <p><strong>Data preferida:</strong> ${validatedData.preferredDate || 'Não especificada'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${validatedData.message}</p>
      `,
    };

    await sgMail.send(msg);
    */

    // Option 3: Using Formspree or similar service
    /*
    const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });

    if (!formspreeResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    // For now, just log the data (replace with actual email sending)
    console.log('New contact form submission:', validatedData);

    // TODO: Send WhatsApp notification (optional)
    /*
    const whatsappMessage = `Nova consulta solicitada:
    Nome: ${validatedData.name}
    Telefone: ${validatedData.phone}
    Email: ${validatedData.email}
    Mensagem: ${validatedData.message}`;

    // You can use WhatsApp Business API or a service like Twilio
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Dados inválidos. Verifique os campos e tente novamente.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
