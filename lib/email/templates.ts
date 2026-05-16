const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://makecareer.jp";

function layout(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MakeCareer</title>
<style>
  body { margin:0; padding:0; background:#f1f5f9; font-family:'Helvetica Neue',Arial,sans-serif; }
  .wrap { max-width:600px; margin:32px auto; background:#fff; border-radius:12px; overflow:hidden; }
  .header { background:#0a1628; padding:28px 32px; }
  .header-logo { color:#fff; font-size:22px; font-weight:900; letter-spacing:-0.5px; }
  .header-logo span { color:#d97706; }
  .content { padding:36px 32px; }
  h1 { margin:0 0 16px; font-size:20px; color:#0a1628; font-weight:800; }
  p { margin:0 0 14px; font-size:14px; color:#475569; line-height:1.8; }
  .btn { display:inline-block; background:#d97706; color:#fff !important; text-decoration:none; font-weight:700; font-size:14px; padding:14px 28px; border-radius:8px; margin:16px 0; }
  .divider { border:none; border-top:1px solid #e2e8f0; margin:24px 0; }
  .box { background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:20px; margin:20px 0; }
  .box-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#94a3b8; margin:0 0 8px; }
  .box-value { font-size:14px; color:#0a1628; font-weight:600; margin:0; }
  .footer { background:#f8fafc; padding:20px 32px; border-top:1px solid #e2e8f0; }
  .footer p { font-size:11px; color:#94a3b8; margin:0; line-height:1.6; }
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="header-logo">Make<span>Career</span></div>
  </div>
  <div class="content">${body}</div>
  <div class="footer">
    <p>MakeCareer Co., Ltd. | 4-1-1 Meieki, Nakamura-ku, Nagoya, Aichi 450-0002</p>
    <p>This email was sent automatically. Please do not reply directly to this message.</p>
    <p>For enquiries, please visit <a href="${BASE_URL}/contact" style="color:#2b5bb8;">${BASE_URL}/contact</a></p>
  </div>
</div>
</body>
</html>`;
}

export function contactConfirmationHtml(name: string): string {
  return layout(`
    <h1>Dear ${name},</h1>
    <p>Thank you for contacting MakeCareer. We have received your enquiry.</p>
    <p>A dedicated consultant will be in touch with you <strong>within one business day</strong>.</p>
    <hr class="divider" />
    <p>If your matter is urgent, please call us on the number below.</p>
    <div class="box">
      <p class="box-label">Free Phone</p>
      <p class="box-value">0120-000-000 (Mon–Fri, 9:00–18:00)</p>
    </div>
    <a class="btn" href="${BASE_URL}/faq">Browse our FAQ</a>
  `);
}

export function contactNotificationHtml(data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
}): string {
  return layout(`
    <h1>New enquiry received</h1>
    <div class="box">
      <p class="box-label">Name</p><p class="box-value">${data.name}</p>
    </div>
    ${data.company ? `<div class="box"><p class="box-label">Company</p><p class="box-value">${data.company}</p></div>` : ""}
    <div class="box">
      <p class="box-label">Email</p><p class="box-value">${data.email}</p>
    </div>
    ${data.phone ? `<div class="box"><p class="box-label">Phone</p><p class="box-value">${data.phone}</p></div>` : ""}
    ${data.serviceInterest ? `<div class="box"><p class="box-label">Service of Interest</p><p class="box-value">${data.serviceInterest}</p></div>` : ""}
    <div class="box">
      <p class="box-label">Message</p>
      <p class="box-value" style="white-space:pre-wrap;">${data.message}</p>
    </div>
    <a class="btn" href="mailto:${data.email}">Reply</a>
  `);
}

export function downloadConfirmationHtml(name: string, resourceTitle: string): string {
  return layout(`
    <h1>Dear ${name},</h1>
    <p>Thank you for requesting a resource from MakeCareer.</p>
    <div class="box">
      <p class="box-label">Requested Resource</p>
      <p class="box-value">${resourceTitle}</p>
    </div>
    <p>Click the button below to download your resource. The link is valid for 7 days.</p>
    <a class="btn" href="${BASE_URL}/downloads">Download Now</a>
    <hr class="divider" />
    <p>We have many more free guides available — explore them all on our downloads page.</p>
  `);
}

export function downloadNotificationHtml(data: {
  name: string;
  email: string;
  resourceSlug: string;
}): string {
  return layout(`
    <h1>New download request</h1>
    <div class="box">
      <p class="box-label">Name</p><p class="box-value">${data.name}</p>
    </div>
    <div class="box">
      <p class="box-label">Email</p><p class="box-value">${data.email}</p>
    </div>
    <div class="box">
      <p class="box-label">Resource</p><p class="box-value">${data.resourceSlug}</p>
    </div>
  `);
}

export function seminarConfirmationHtml(data: {
  name: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventFormat: string;
  eventLocation: string;
}): string {
  return layout(`
    <h1>Dear ${data.name},</h1>
    <p>Thank you for registering for a MakeCareer seminar. Your place has been confirmed.</p>
    <div class="box">
      <p class="box-label">Seminar</p><p class="box-value">${data.eventName}</p>
    </div>
    <div class="box">
      <p class="box-label">Date &amp; Time</p><p class="box-value">${data.eventDate} ${data.eventTime}</p>
    </div>
    <div class="box">
      <p class="box-label">Format</p><p class="box-value">${data.eventFormat}</p>
    </div>
    <div class="box">
      <p class="box-label">Location / Access</p><p class="box-value">${data.eventLocation}</p>
    </div>
    <p>For online sessions, we will send you the Zoom link before the start date.</p>
    <hr class="divider" />
    <p>If you have any questions, please don't hesitate to get in touch.</p>
    <a class="btn" href="${BASE_URL}/contact">Contact Us</a>
  `);
}

export function seminarNotificationHtml(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  eventName: string;
  eventSlug: string;
}): string {
  return layout(`
    <h1>New seminar registration</h1>
    <div class="box">
      <p class="box-label">Seminar</p><p class="box-value">${data.eventName}</p>
    </div>
    <div class="box">
      <p class="box-label">Name</p><p class="box-value">${data.name}</p>
    </div>
    <div class="box">
      <p class="box-label">Email</p><p class="box-value">${data.email}</p>
    </div>
    ${data.company ? `<div class="box"><p class="box-label">Company</p><p class="box-value">${data.company}</p></div>` : ""}
    ${data.phone ? `<div class="box"><p class="box-label">Phone</p><p class="box-value">${data.phone}</p></div>` : ""}
  `);
}
