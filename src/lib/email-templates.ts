import { site } from "@/content/site";
import type { ContactFormValues } from "@/lib/contact-schema";

/**
 * Email bodies for the two messages a submission triggers: an internal
 * notification and a confirmation to the person who enquired.
 *
 * Styling is inline because email clients strip <style> blocks, and the layout
 * stays single-column so it survives Outlook and mobile clients alike.
 */

const BRAND = "#2563EB";
const ACCENT = "#22D3EE";
const INK = "#0B0D14";

/** Escapes user-supplied text before it goes anywhere near an HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shell(content: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#F4F6FB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E4E8F2;">
      <div style="background:${INK};padding:22px 28px;">
        <span style="display:inline-block;font-size:18px;font-weight:700;color:#FFFFFF;letter-spacing:-0.5px;">
          Quicc<span style="color:${ACCENT};">Tech</span>
        </span>
      </div>
      ${content}
    </div>
    <p style="max-width:560px;margin:16px auto 0;font-size:12px;color:#8A93A8;text-align:center;">
      ${site.name} · <a href="mailto:${site.email}" style="color:#8A93A8;">${site.email}</a>
    </p>
  </body>
</html>`;
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #EDF0F7;font-size:12px;color:#8A93A8;text-transform:uppercase;letter-spacing:0.08em;width:110px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #EDF0F7;font-size:14px;color:#151A24;">${value}</td>
  </tr>`;
}

/** Sent to the Quicc inbox for every submission. */
export function buildNotificationEmail(values: ContactFormValues) {
  const name = escapeHtml(values.name);
  const email = escapeHtml(values.email);
  const message = escapeHtml(values.message).replace(/\n/g, "<br />");

  const html = shell(`
    <div style="padding:28px;">
      <h1 style="margin:0 0 6px;font-size:20px;color:#151A24;">New project enquiry</h1>
      <p style="margin:0 0 20px;font-size:14px;color:#6B7488;">
        Submitted from the ${escapeHtml(site.domain)} contact form.
      </p>
      <table style="width:100%;border-collapse:collapse;">
        ${detailRow("Name", name)}
        ${detailRow("Email", `<a href="mailto:${email}" style="color:${BRAND};">${email}</a>`)}
        ${detailRow("Service", escapeHtml(values.service))}
        ${detailRow("Timeline", escapeHtml(values.timeline))}
      </table>
      <h2 style="margin:24px 0 8px;font-size:13px;color:#8A93A8;text-transform:uppercase;letter-spacing:0.08em;">Project details</h2>
      <p style="margin:0;font-size:15px;line-height:1.6;color:#151A24;white-space:pre-wrap;">${message}</p>
      <a href="mailto:${email}" style="display:inline-block;margin-top:24px;padding:12px 20px;border-radius:10px;background:${BRAND};color:#FFFFFF;font-size:14px;font-weight:600;text-decoration:none;">Reply to ${name}</a>
    </div>
  `);

  const text = [
    "New project enquiry",
    "",
    `Name:     ${values.name}`,
    `Email:    ${values.email}`,
    `Service:  ${values.service}`,
    `Timeline: ${values.timeline}`,
    "",
    "Project details:",
    values.message,
  ].join("\n");

  return {
    subject: `New enquiry — ${values.service} — ${values.name}`,
    html,
    text,
  };
}

/** Auto-reply sent to whoever filled in the form. */
export function buildConfirmationEmail(values: ContactFormValues) {
  const firstName = escapeHtml(values.name.split(" ")[0] || values.name);

  const html = shell(`
    <div style="padding:28px;">
      <h1 style="margin:0 0 12px;font-size:20px;color:#151A24;">Thanks, ${firstName} — we've got your enquiry</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4A5265;">
        Your message has landed with our founder, who reads every enquiry personally.
        You can expect a reply within one working day — usually the same day.
      </p>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#4A5265;">
        That reply will include a suggested scope, a timeline, and a fixed starting price
        for what you described. No sales sequence, no obligation.
      </p>
      <table style="width:100%;border-collapse:collapse;background:#F7F9FD;border-radius:12px;">
        ${detailRow("Service", escapeHtml(values.service))}
        ${detailRow("Timeline", escapeHtml(values.timeline))}
      </table>
      <p style="margin:22px 0 0;font-size:14px;line-height:1.6;color:#6B7488;">
        Need to add something? Just reply to this email.
      </p>
    </div>
  `);

  const text = [
    `Thanks, ${values.name.split(" ")[0] || values.name} — we've got your enquiry.`,
    "",
    "Your message has landed with our founder, who reads every enquiry personally.",
    "You can expect a reply within one working day, including a suggested scope,",
    "a timeline, and a fixed starting price. No obligation.",
    "",
    `Service:  ${values.service}`,
    `Timeline: ${values.timeline}`,
    "",
    "Need to add something? Just reply to this email.",
    "",
    `${site.name} · ${site.email}`,
  ].join("\n");

  return {
    subject: `We received your enquiry — ${site.name}`,
    html,
    text,
  };
}
