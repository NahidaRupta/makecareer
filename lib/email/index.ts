import { Resend } from "resend";
import {
  contactConfirmationHtml,
  contactNotificationHtml,
  downloadConfirmationHtml,
  downloadNotificationHtml,
  seminarConfirmationHtml,
  seminarNotificationHtml,
} from "./templates";

const FROM = process.env.RESEND_FROM ?? "MakeCareer <noreply@makecareer.jp>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "info@makecareer.jp";

let _resend: Resend | null = null;
function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  _resend ??= new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

async function send(opts: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const client = getResend();
  if (!client) {
    console.log("[email:dry-run]", opts.to, opts.subject);
    return;
  }
  await client.emails.send({ from: FROM, ...opts });
}

export async function sendContactConfirmation(to: string, name: string): Promise<void> {
  await send({
    to,
    subject: "[MakeCareer] We've received your enquiry",
    html: contactConfirmationHtml(name),
  });
}

export async function sendContactNotification(data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
}): Promise<void> {
  await send({
    to: ADMIN_EMAIL,
    subject: `[MakeCareer] New enquiry from ${data.name}`,
    html: contactNotificationHtml(data),
  });
}

export async function sendDownloadConfirmation(
  to: string,
  name: string,
  resourceTitle: string,
): Promise<void> {
  await send({
    to,
    subject: "[MakeCareer] Your free resource is ready",
    html: downloadConfirmationHtml(name, resourceTitle),
  });
}

export async function sendDownloadNotification(data: {
  name: string;
  email: string;
  resourceSlug: string;
}): Promise<void> {
  await send({
    to: ADMIN_EMAIL,
    subject: `[MakeCareer] Download request: ${data.resourceSlug}`,
    html: downloadNotificationHtml(data),
  });
}

export async function sendSeminarConfirmation(data: {
  to: string;
  name: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventFormat: string;
  eventLocation: string;
}): Promise<void> {
  await send({
    to: data.to,
    subject: `[MakeCareer] Seminar registration confirmed: ${data.eventName}`,
    html: seminarConfirmationHtml(data),
  });
}

export async function sendSeminarNotification(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  eventName: string;
  eventSlug: string;
}): Promise<void> {
  await send({
    to: ADMIN_EMAIL,
    subject: `[MakeCareer] New seminar registration: ${data.eventName}`,
    html: seminarNotificationHtml(data),
  });
}
