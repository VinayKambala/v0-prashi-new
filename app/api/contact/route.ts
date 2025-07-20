import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, project, message } = await req.json();

  if (!name || !email || !phone || !project || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.HOSTINGER_SMTP_USER,
      pass: process.env.HOSTINGER_SMTP_PASS,
    },
  });

  try {
    // Send mail to sales@miolo.io
    await transporter.sendMail({
      from: "sales@miolo.in",
      to: "sales@miolo.in",
      subject: "New Contact Message",
      text: `${message}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Project:</strong> ${project}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: "sales@miolo.in",
      to: email,
      subject: "Thank you for contacting Miolo",
      text: `Dear ${name},\n\nThank you for reaching out to Miolo. We have received your message and our team will get back to you soon.\n\nBest regards,\nMiolo Team`,
      html: `<p>Dear ${name},</p>
             <p>Thank you for reaching out to <strong>Miolo</strong>. We have received your message and our team will get back to you soon.</p>
             <p>Best regards,<br/>Miolo Team</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}