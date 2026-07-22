import { Resend } from "resend";
import { company } from "@/lib/content/company";

export type SendResult = { delivered: boolean };

type Attachment = { filename: string; content: Buffer };

/**
 * Sends a notification email for a form submission. If RESEND_API_KEY isn't
 * configured yet (expected until the client sets it up post-launch), the
 * submission is still validated and logged server-side, and `delivered:
 * false` is returned so the UI can show an honest "not fully connected yet"
 * message instead of a false success or a hard failure.
 */
export async function sendFormNotification({
  subject,
  html,
  replyTo,
  attachments,
}: {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Attachment[];
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[email] RESEND_API_KEY not set - form submission logged only:", {
      subject,
      replyTo,
    });
    return { delivered: false };
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "no-reply@khsystems.org";

  await resend.emails.send({
    from: `${company.name} Website <${from}>`,
    to: company.email,
    replyTo,
    subject,
    html,
    attachments: attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  });

  return { delivered: true };
}

export function renderFieldsHtml(fields: Record<string, string | undefined | null>) {
  const rows = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;">${escapeHtml(
          label
        )}</td><td style="padding:4px 0;">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  return `<table cellpadding="0" cellspacing="0">${rows}</table>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
