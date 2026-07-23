import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appendLeadToSheet } from "@/lib/googleSheets";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: NextRequest) {
  const { name, phone, email, city, capacity, message, source } = await request.json();

  if (!name || !phone || !city) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  let sheetOk = false;
  let emailOk = false;

  // Durable backup write — always attempted, never blocks the email path below.
  try {
    await appendLeadToSheet({
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: email || "Not provided",
      city,
      capacity: capacity || "Not specified",
      message: message || "No additional message",
      source: source === "survey-popup" ? "survey-popup" : "contact-form",
    });
    sheetOk = true;
  } catch (error) {
    console.error("[contact-api][sheets] append failed:", error);
  }

  // Email notifications — always attempted, never blocked by the sheet path above.
  try {
    const salesRecipients = (process.env.SALES_NOTIFY_EMAILS || process.env.SMTP_USER || "")
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean);

    await transporter.sendMail({
      from: `"MaxGreen Energy" <${process.env.SMTP_USER}>`,
      to: salesRecipients,
      subject: `New Quote Request — ${name} (${city})`,
      html: `
        <h2>New Solar Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Capacity Required:</strong> ${capacity || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message || "No additional message"}</p>
      `,
    });

    if (email) {
      await transporter.sendMail({
        from: `"MaxGreen Energy" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We've Received Your Query — MaxGreen Energy",
        html: `
          <h2>Thank you for contacting MaxGreen Energy, ${name}!</h2>
          <p>We've received your query and one of our representatives will get back to you within <strong>24–48 hours</strong>.</p>
          <p>In the meantime, if you have any urgent questions, feel free to call us at <strong>+92 300 034 1048</strong>.</p>
          <br/>
          <p>Best regards,<br/>MaxGreen Energy Team</p>
        `,
      });
    }

    emailOk = true;
  } catch (error) {
    console.error("[contact-api][email] send failed:", error);
  }

  if (!sheetOk && !emailOk) {
    console.error("[contact-api] DEGRADED: both sheet and email failed — lead NOT captured", {
      name,
      phone,
      city,
    });
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  if (!sheetOk || !emailOk) {
    console.error(`[contact-api] DEGRADED: sheet=${sheetOk} email=${emailOk}`);
  }

  return NextResponse.json({ success: true });
}
