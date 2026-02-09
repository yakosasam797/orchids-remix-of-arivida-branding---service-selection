import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Contact form handler
 *
 * Sends an email to arovidatechnologies@gmail.com using Gmail SMTP.
 * Required environment variables:
 * - SMTP_HOST (e.g., smtp.gmail.com)
 * - SMTP_PORT (e.g., 587)
 * - SMTP_USER (your Gmail address)
 * - SMTP_PASS (Gmail App Password - 16 chars, no spaces)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, businessType, service, message, formType } = body as {
      name: string;
      phone: string;
      businessType?: string;
      service?: string;
      message?: string;
      formType?: string;
    };

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required" },
        { status: 400 }
      );
    }

    const emailSubject = `New Contact Form Submission - ${formType || "Website"}`;

    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0C1A78;">New Contact Form Submission</h2>
          <p><strong>Form Type:</strong> ${formType || "General"}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType || "Not specified"}</p>
          <p><strong>Service Needed:</strong> ${service || "Not specified"}</p>
          ${
            message
              ? `<p><strong>Message:</strong><br />${String(message).replace(
                  /\n/g,
                  "<br />"
                )}</p>`
              : ""
          }
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Arovida Technologies website contact form.
          </p>
        </body>
      </html>
    `;

    // Get SMTP configuration from environment
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    // Check if all SMTP variables are configured
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("❌ SMTP configuration missing", {
        hasHost: !!SMTP_HOST,
        hasPort: !!SMTP_PORT,
        hasUser: !!SMTP_USER,
        hasPass: !!SMTP_PASS,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please contact us via WhatsApp.",
          error: "SMTP_NOT_CONFIGURED",
        },
        { status: 500 }
      );
    }

    try {
      // Create Nodemailer transporter with Gmail SMTP
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Send the email
      const info = await transporter.sendMail({
        from: `"Arovida Website" <${SMTP_USER}>`,
        to: "arovidatechnologies@gmail.com",
        subject: emailSubject,
        html: emailHtml,
        replyTo: SMTP_USER,
      });

      console.log("✅ Email sent successfully via Gmail SMTP", {
        to: "arovidatechnologies@gmail.com",
        messageId: info.messageId,
        formType,
      });

      return NextResponse.json({
        success: true,
        message: "Form submitted successfully! We'll contact you soon.",
      });
    } catch (emailError) {
      console.error("❌ Error sending email via SMTP", {
        error: emailError,
        formData: { name, phone, businessType, service, message, formType },
      });

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try WhatsApp or call us directly.",
          error: "SMTP_SEND_ERROR",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("❌ Error processing contact form request", error);

    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 400 }
    );
  }
}
