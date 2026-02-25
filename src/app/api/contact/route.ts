import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

// Detect gibberish: random strings with too many consonant clusters and no real words
function isGibberish(text: string): boolean {
  if (!text || text.length < 5) return false;
  const words = text.trim().split(/\s+/);
  // Check if most "words" have unusual consonant patterns
  const gibberishWords = words.filter((word) => {
    // More than 3 consecutive consonants is suspicious
    if (/[bcdfghjklmnpqrstvwxyz]{4,}/i.test(word)) return true;
    // Very long words with mixed case and no vowel patterns
    if (word.length > 10 && !/[aeiou]{2,}/i.test(word)) return true;
    return false;
  });
  // If more than half the words look like gibberish, flag it
  return words.length > 0 && gibberishWords.length / words.length > 0.5;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData & { website?: string } = await request.json();
    const { name, email, company, service, message, website } = body;

    // Honeypot check — real users never fill this hidden field
    if (website) {
      // Silently accept but don't send email (don't tip off the bot)
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Gibberish detection
    if (isGibberish(name) || isGibberish(message) || (company && isGibberish(company))) {
      // Silently accept but don't send email
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Format service name
    const serviceNames: Record<string, string> = {
      "software-development": "Software Development",
      "data-engineering": "Data Engineering",
      dba: "Database Administration",
      consulting: "Technical Consulting",
      other: "Other",
    };

    const serviceName = service ? serviceNames[service] || service : "Not specified";

    // Email content
    const msg = {
      to: "evan@samix-technology.com",
      from: "noreply@samix-technology.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 16px; }
            .label { font-weight: bold; color: #6366f1; margin-bottom: 4px; }
            .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb; }
            .message { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9;">Samix Technology Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">${serviceName}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value message">${message}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - Samix Technology

Name: ${name}
Email: ${email}
Company: ${company || "Not specified"}
Service: ${serviceName}

Message:
${message}
      `,
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
