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
    // Using Web3Forms for reliable email delivery (free tier available)
    // Get your access key from https://web3forms.com
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      // Log the submission for manual follow-up if Web3Forms is not configured
      console.error('⚠️ WEB3FORMS_ACCESS_KEY not configured! Form submission received:', {
        name,
        phone,
        businessType,
        service,
        message,
        formType,
        email: 'arovidatechnologies@gmail.com',
      });
      
      // Still return success to user, but log the issue
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully',
        warning: 'Email service not configured. Please set WEB3FORMS_ACCESS_KEY in environment variables.'
      });
    }
    
    try {
      // Primary: Web3Forms API
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
          to: 'arovidatechnologies@gmail.com', // CRITICAL: Your sales email
          reply_to: phone ? `phone-${phone.replace(/\D/g, '')}@arovida.contact` : 'noreply@arovida.contact',
          message: emailHtml,
          // Additional fields for better organization
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
        return NextResponse.json({ 
          success: true, 
          message: 'Form submitted successfully' 
        });
      } else {
        // Log the error but don't fail the request
        console.error('❌ Web3Forms error:', web3formsData);
        console.error('Form submission data:', {
          name,
          phone,
          businessType,
          service,
          message,
          formType,
          email: 'arovidatechnologies@gmail.com',
        });
        
        // Still return success to user, but log for manual follow-up
        return NextResponse.json({ 
          success: true, 
          message: 'Form submitted successfully',
          warning: 'Email delivery may have failed. Please check logs.'
        });
      }
    } catch (error) {
      // Critical error logging
      console.error('❌ CRITICAL: Email sending failed:', error);
      console.error('Form submission data (MANUAL FOLLOW-UP REQUIRED):', {
        name,
        phone,
        businessType,
        service,
        message,
        formType,
        email: 'arovidatechnologies@gmail.com',
        timestamp: new Date().toISOString(),
      });
      
      // Return success to user, but log for immediate action
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully',
        error: 'Email service error. Data logged for manual follow-up.'
      });
    }
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

