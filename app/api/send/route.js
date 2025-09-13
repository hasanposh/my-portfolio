import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,      // your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
      subject,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SendMail Error:", err);
    return NextResponse.json(
      { message: "Failed to send email. " + err.message },
      { status: 500 }
    );
  }
}
