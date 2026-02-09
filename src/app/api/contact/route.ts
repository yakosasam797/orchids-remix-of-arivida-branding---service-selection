import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form handler
 *
 * Sends an email to arovidatechnologies@gmail.com using Resend.
 * - Requires RESEND_API_KEY to be set in the environment (Vercel project settings).
 * - Returns JSON with { success, message, error? } so the frontend can react properly.
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

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured. Unable to send email.", {
        formData: { name, phone, businessType, service, message, formType },
      });

      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please set RESEND_API_KEY in your environment.",
          error: "RESEND_API_KEY_NOT_CONFIGURED",
        },
        { status: 500 }
      );
    }

    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          // IMPORTANT:
          // Use Resend's default verified sender until your own domain is verified.
          // After you verify arovidatechnologies.com in Resend, you can change this to
          // something like: "Arovida Website <noreply@arovidatechnologies.com>"
          from: "Arovida Website <onboarding@resend.dev>",
          to: ["arovidatechnologies@gmail.com"],
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      const resendData = await resendResponse.json().catch(() => ({}));

      if (!resendResponse.ok || !resendData?.id) {
        console.error("❌ Resend API error", {
          status: resendResponse.status,
          statusText: resendResponse.statusText,
          response: resendData,
          formData: { name, phone, businessType, service, message, formType },
        });

        return NextResponse.json(
          {
            success: false,
            message: "Failed to send email. Please try again later.",
            error: "RESEND_API_ERROR",
          },
          { status: 502 }
        );
      }

      console.log("✅ Email sent successfully via Resend", {
        to: "arovidatechnologies@gmail.com",
        id: resendData.id,
        formType,
      });

      return NextResponse.json({
        success: true,
        message: "Form submitted successfully",
      });
    } catch (error) {
      console.error("❌ Unexpected error sending email via Resend", {
        error,
        formData: { name, phone, businessType, service, message, formType },
      });

      return NextResponse.json(
        {
          success: false,
          message: "Unexpected error while sending email.",
          error: "RESEND_UNEXPECTED_ERROR",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("❌ Error processing contact form request", error);

    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 400 }
    );
  }
}

