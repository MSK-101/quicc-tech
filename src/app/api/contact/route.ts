import { Resend } from "resend";

import { site } from "@/content/site";
import {
  parseContactPayload,
  validateContactForm,
  type ContactFormValues,
} from "@/lib/contact-schema";
import {
  buildConfirmationEmail,
  buildNotificationEmail,
} from "@/lib/email-templates";
import { checkRateLimit, clientIdentifier } from "@/lib/rate-limit";

/** Six submissions per IP per ten minutes. */
const RATE_LIMIT = { limit: 6, windowMs: 10 * 60 * 1000 };

/**
 * Splits a comma-separated recipient list into the array Resend expects.
 *
 * Lets CONTACT_TO_EMAIL hold several addresses:
 *   CONTACT_TO_EMAIL=Info@QuiccTech.io,webartist101@gmail.com
 *
 * Sending to more than one inbox is also a useful safety net — if one provider
 * filters the message into junk, the other still gets the enquiry.
 */
function parseRecipients(value: string): string[] {
  return value
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
}

/**
 * Reads configuration at request time rather than module scope so a missing
 * key surfaces as a clear 500 instead of crashing the build.
 */
function readConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const to = parseRecipients(process.env.CONTACT_TO_EMAIL ?? site.email);
  if (to.length === 0) return null;

  return {
    apiKey,
    to,
    from:
      process.env.CONTACT_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`,
  };
}

export async function POST(request: Request) {
  const identifier = clientIdentifier(request.headers);
  const { allowed, retryAfterSeconds } = checkRateLimit(identifier, RATE_LIMIT);
  if (!allowed) {
    return Response.json(
      { error: "Too many enquiries from this connection. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let payload: ContactFormValues | null;
  try {
    payload = parseContactPayload(await request.json());
  } catch {
    return Response.json({ error: "Malformed request body." }, { status: 400 });
  }

  if (!payload) {
    return Response.json({ error: "Malformed request body." }, { status: 400 });
  }

  // Honeypot: a real visitor never sees this field, so a value means a bot.
  // Answer as if it succeeded rather than telling the bot it was caught.
  //
  // Logged because this path silently discards the message: if a browser ever
  // autofills the field, a genuine enquiry disappears with no other trace, and
  // the log line is the only way to tell that apart from "no traffic".
  if (payload.company) {
    console.warn(
      `[contact] Honeypot tripped — discarded submission from ${payload.email}`,
    );
    return Response.json({ ok: true });
  }

  const errors = validateContactForm(payload);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { error: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  // Checked after validation so a bad request is still answered with a 4xx on
  // an environment that has not been given a key yet.
  const config = readConfig();
  if (!config) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return Response.json(
      {
        error: `Email delivery is not configured yet. Please email ${site.email} directly.`,
      },
      { status: 500 },
    );
  }

  const resend = new Resend(config.apiKey);
  const notification = buildNotificationEmail(payload);

  // The internal notification is the one that must succeed — if it fails, the
  // enquiry is lost, so the visitor is told to email directly instead.
  const { error: notificationError } = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: payload.email,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
  });

  if (notificationError) {
    console.error("[contact] Notification email failed:", notificationError);
    return Response.json(
      {
        error: `We couldn't send that right now. Please email ${site.email} directly.`,
      },
      { status: 502 },
    );
  }

  // The confirmation is a nicety. It is also the send most likely to be
  // rejected before the sending domain is verified in Resend, so a failure is
  // logged and swallowed rather than shown to a visitor whose enquiry did land.
  const confirmation = buildConfirmationEmail(payload);
  const { error: confirmationError } = await resend.emails.send({
    from: config.from,
    to: payload.email,
    // Replies to the confirmation go to the primary inbox only, so a visitor
    // hitting reply does not fan out to every internal recipient.
    replyTo: config.to[0],
    subject: confirmation.subject,
    html: confirmation.html,
    text: confirmation.text,
  });

  if (confirmationError) {
    console.warn("[contact] Confirmation email failed:", confirmationError);
  }

  return Response.json({ ok: true, confirmationSent: !confirmationError });
}
