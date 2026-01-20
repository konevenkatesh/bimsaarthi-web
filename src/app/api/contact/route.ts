import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { enquiryType, name, email, organization, role, orgType, projectStage, message } = body;

    // Validate required fields
    if (!enquiryType || !name || !email || !organization) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if SMTP configuration is present
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
       console.error("Missing SMTP Configuration");
       return NextResponse.json(
        { error: 'Server misconfigured: Missing SMTP settings' },
        { status: 500 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must be authenticated user usually)
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
      replyTo: email,
      subject: `New Enquiry: ${enquiryType} - ${organization}`,
      text: `
        New Enquiry Received from BIMSaarthi Website

        Enquiry Type: ${enquiryType}

        Contact Details:
        Name: ${name}
        Email: ${email}
        Organization: ${organization}
        Role: ${role || 'N/A'}

        Context:
        Organization Type: ${orgType || 'N/A'}
        Project Stage: ${projectStage || 'N/A'}

        Message:
        ${message || 'No message provided'}
      `,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        
        <h3>Contact Details</h3>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Organization:</strong> ${organization}</li>
            <li><strong>Role:</strong> ${role || 'N/A'}</li>
        </ul>

        <h3>Context</h3>
        <ul>
            <li><strong>Organization Type:</strong> ${orgType || 'N/A'}</li>
            <li><strong>Project Stage:</strong> ${projectStage || 'N/A'}</li>
        </ul>

        <h3>Message</h3>
        <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
