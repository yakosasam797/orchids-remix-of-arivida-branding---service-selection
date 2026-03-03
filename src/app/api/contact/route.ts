import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Contact form handler
 *
 * 1. Saves submission to Supabase (reliable backup — never lose a lead)
 * 2. Sends email notification via Gmail SMTP
 *
 * Required environment variables:
 * - SUPABASE_URL (e.g., https://xxxxx.supabase.co)
 * - SUPABASE_ANON_KEY (Supabase publishable/anon key)
 * - SMTP_HOST (e.g., smtp.gmail.com)
 * - SMTP_PORT (e.g., 587)
 * - SMTP_USER (your Gmail address)
 * - SMTP_PASS (Gmail App Password - 16 chars, no spaces)
 */

/* ===== SUPABASE HELPER ===== */
async function saveToSupabase(data: {
  name: string;
  phone: string;
  business_name?: string;
  service?: string;
  message?: string;
  form_type: string;
}): Promise<{ success: boolean; error?: string }> {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn("⚠️ Supabase not configured — skipping database backup");
    return { success: false, error: "SUPABASE_NOT_CONFIGURED" };
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error("❌ Supabase save failed:", {
        status: response.status,
        error: errorText,
      });
      return { success: false, error: `SUPABASE_ERROR: ${response.status}` };
    }

    console.log("✅ Form submission saved to Supabase", {
      name: data.name,
      form_type: data.form_type,
    });
    return { success: true };
  } catch (error) {
    console.error("❌ Supabase network error:", error);
    return { success: false, error: "SUPABASE_NETWORK_ERROR" };
  }
}

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

    // ===== STEP 1: Save to Supabase (reliable backup) =====
    const supabaseResult = await saveToSupabase({
      name,
      phone,
      business_name: businessType || undefined,
      service: service || undefined,
      message: message || undefined,
      form_type: formType || "Website",
    });

    // ===== STEP 2: Send email notification via SMTP =====
    const emailSubject = `New Contact Form Submission - ${formType || "Website"}`;

    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0C1A78;">New Contact Form Submission</h2>
          <p><strong>Form Type:</strong> ${formType || "General"}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Name:</strong> ${businessType || "Not specified"}</p>
          <p><strong>Service Needed:</strong> ${service || "Not specified"}</p>
          ${message
        ? `<p><strong>Message:</strong><br />${String(message).replace(
          /\n/g,
          "<br />"
        )}</p>`
        : ""
      }
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Arovida Technologies website contact form.
            ${supabaseResult.success ? "✅ Also saved to database." : "⚠️ Database backup failed."}
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

      // If Supabase saved successfully, still return success (lead is safe!)
      if (supabaseResult.success) {
        return NextResponse.json({
          success: true,
          message: "Form submitted successfully! We'll contact you soon.",
        });
      }

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
        supabaseBackup: supabaseResult.success,
      });

      return NextResponse.json({
        success: true,
        message: "Form submitted successfully! We'll contact you soon.",
      });
    } catch (emailError) {
      console.error("❌ Error sending email via SMTP", {
        error: emailError,
        formData: { name, phone, businessType, service, message, formType },
        supabaseBackup: supabaseResult.success,
      });

      // If Supabase saved, still return success — lead is safe!
      if (supabaseResult.success) {
        console.log("📦 Lead is safe in Supabase despite email failure");
        return NextResponse.json({
          success: true,
          message: "Form submitted successfully! We'll contact you soon.",
        });
      }

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
