"use server";

import { newsletterSchema, type NewsletterFormValues } from "@/lib/validations/newsletter";
import { sendFormNotification, renderFieldsHtml } from "@/lib/email";

export async function subscribeToUpdates(values: NewsletterFormValues) {
  const parsed = newsletterSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false as const, delivered: false, error: "Invalid submission." };
  }
  if (parsed.data.website) {
    return { success: true as const, delivered: false };
  }

  const { email } = parsed.data;

  const result = await sendFormNotification({
    subject: `New updates signup: ${email}`,
    replyTo: email,
    html: renderFieldsHtml({ Email: email, Source: "Footer newsletter signup" }),
  });

  return { success: true as const, delivered: result.delivered };
}
