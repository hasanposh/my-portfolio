import { transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: process.env.EMAIL,        // your Gmail
      to: process.env.EMAIL,          // recipient
      subject: subject,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
