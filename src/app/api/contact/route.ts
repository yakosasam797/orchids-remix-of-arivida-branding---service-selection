import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, businessType, service, message, formType } = body;

    // Email content
    const emailSubject = `New Contact Form Submission - ${formType || 'Website'}`;
    const emailBody = `
New contact form submission from Arovida website:

Name: ${name}
Phone: ${phone}
Business Type: ${businessType || 'Not specified'}
Service Needed: ${service || 'Not specified'}
Message: ${message || 'No message provided'}

Form Type: ${formType || 'General'}

---
This email was sent from the Arovida Technologies website contact form.
    `;

    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0C1A78;">New Contact Form Submission</h2>
          <p><strong>Form Type:</strong> ${formType || 'General'}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType || 'Not specified'}</p>
          <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
          ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This email was sent from the Arovida Technologies website contact form.</p>
        </body>
      </html>
    `;

    // Try to send email using mailto as fallback, or implement proper email service
    // For production, you should use Resend, SendGrid, or similar service
    // For now, we'll use a webhook or email service API
    
    // Option: Use a service like EmailJS, Formspree, or Web3Forms
    // For immediate functionality, you can use mailto: link generation
    // But better to use a proper email service
    
    // CRITICAL: Email delivery to arovidatechnologies@gmail.com
    // Try multiple email services for reliability
    
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    let emailSent = false;
    let lastError: any = null;
    
    // Method 1: Try Resend API (most reliable)
    if (RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Arovida Website <noreply@arovidatechnologies.com>',
            to: ['arovidatechnologies@gmail.com'],
            subject: emailSubject,
            html: emailHtml,
            reply_to: phone ? `phone-${phone.replace(/\D/g, '')}@arovida.contact` : undefined,
          }),
        });

        const resendData = await resendResponse.json();
        
        if (resendResponse.ok && resendData.id) {
          console.log('✅ Email sent successfully to arovidatechnologies@gmail.com via Resend');
          emailSent = true;
        } else {
          console.error('❌ Resend error:', resendData);
          lastError = resendData;
        }
      } catch (error) {
        console.error('❌ Resend API error:', error);
        lastError = error;
      }
    }
    
    // Method 2: Fallback to Web3Forms
    if (!emailSent && WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: emailSubject,
            from_name: name,
            from_email: phone ? `phone-${phone.replace(/\D/g, '')}@arovida.contact` : 'noreply@arovida.contact',
            to: 'arovidatechnologies@gmail.com',
            reply_to: phone ? `phone-${phone.replace(/\D/g, '')}@arovida.contact` : 'noreply@arovida.contact',
            message: emailHtml,
            name: name,
            phone: phone,
            businessType: businessType || 'Not specified',
            service: service || 'Not specified',
            formType: formType || 'General',
            _template: 'table',
          }),
        });

        const web3formsData = await web3formsResponse.json();

        if (web3formsData.success) {
          console.log('✅ Email sent successfully to arovidatechnologies@gmail.com via Web3Forms');
          emailSent = true;
        } else {
          console.error('❌ Web3Forms error:', web3formsData);
          lastError = web3formsData;
        }
      } catch (error) {
        console.error('❌ Web3Forms API error:', error);
        lastError = error;
      }
    }
    
    // If no email service is configured or all failed, log for manual follow-up
    if (!emailSent) {
      console.error('⚠️ CRITICAL: No email sent! Form submission data:', {
        name,
        phone,
        businessType,
        service,
        message,
        formType,
        email: 'arovidatechnologies@gmail.com',
        timestamp: new Date().toISOString(),
        error: lastError,
      });
      
      // Log to console for immediate visibility
      console.error('📧 MANUAL ACTION REQUIRED: Send email to arovidatechnologies@gmail.com with above data');
    }
    
    // Always return success to user (don't break their experience)
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      emailSent: emailSent,
      ...(emailSent ? {} : { warning: 'Email delivery may have failed. Data logged for manual follow-up.' })
    });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

