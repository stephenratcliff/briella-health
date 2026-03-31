import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, memberId } = await request.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Briella Health <hello@briella.health>',
      replyTo: 'hello@briellahealth.com',
      to: email,
      subject: `Welcome to Briella Health, ${firstName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0b1623;font-family:'Inter',system-ui,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:40px;">
      <div style="display:inline-block;background-color:#0d9488;color:#ffffff;width:40px;height:40px;border-radius:8px;font-weight:900;font-size:18px;line-height:40px;text-align:center;">B</div>
      <span style="font-size:20px;font-weight:800;color:#ffffff;margin-left:8px;vertical-align:middle;">Briella</span>
      <span style="font-size:20px;font-weight:800;color:#0d9488;vertical-align:middle;"> Health</span>
    </div>

    <!-- Main Card -->
    <div style="background-color:#111f2e;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:40px 32px;">

      <p style="color:#0d9488;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 16px 0;">Welcome</p>

      <h1 style="color:#ffffff;font-size:28px;font-weight:800;margin:0 0 8px 0;line-height:1.2;">
        You're in, ${firstName}.
      </h1>

      <p style="color:#9ca3af;font-size:15px;line-height:1.7;margin:0 0 32px 0;">
        Your Briella Health account has been created. You're now part of a new approach to preventive health — comprehensive biomarker testing designed to catch what standard physicals miss.
      </p>

      <!-- Member ID -->
      <div style="background-color:#0b1623;border:1px solid rgba(13,148,136,0.3);border-radius:10px;padding:16px 20px;margin-bottom:32px;">
        <p style="color:#9ca3af;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 6px 0;">Your Member ID</p>
        <p style="color:#0d9488;font-size:20px;font-weight:800;margin:0;font-family:monospace;">${memberId || 'Pending'}</p>
      </div>

      <!-- What's Included -->
      <p style="color:#ffffff;font-size:14px;font-weight:700;margin:0 0 16px 0;">Your membership includes:</p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
        <tr>
          <td style="padding:8px 0;color:#9ca3af;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.07);">✓ &nbsp; 100+ biomarkers tested annually</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9ca3af;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.07);">✓ &nbsp; Quest Diagnostics — 2,000+ locations</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9ca3af;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.07);">✓ &nbsp; Personal health dashboard with insights</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9ca3af;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.07);">✓ &nbsp; Year-over-year longitudinal tracking</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9ca3af;font-size:13px;">✓ &nbsp; Physician authorization included</td>
        </tr>
      </table>

      <!-- CTA Button -->
      <div style="text-align:center;margin-bottom:8px;">
        <a href="https://briella.health/login" style="display:inline-block;background-color:#0d9488;color:#ffffff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;text-decoration:none;padding:14px 32px;border-radius:8px;">
          Log In to Your Dashboard →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;">
      <p style="color:#6b7280;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
        Questions? Reply to this email or contact us at<br>
        <a href="mailto:hello@briellahealth.com" style="color:#0d9488;text-decoration:none;">hello@briellahealth.com</a>
      </p>
      <p style="color:#4b5563;font-size:11px;margin:0;">
        © ${new Date().getFullYear()} Briella Health LLC. All rights reserved.<br>
        This email was sent to ${email} because you created an account.
      </p>
    </div>

  </div>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message, details: JSON.stringify(error) }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Signup email error:', err);
    return NextResponse.json({ error: 'Failed to send welcome email' }, { status: 500 });
  }
}
