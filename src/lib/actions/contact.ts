"use server";

import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { sendFormNotification, renderFieldsHtml } from "@/lib/email";

export async function submitContactForm(values: ContactFormValues) {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false as const, delivered: false, error: "Invalid submission." };
  }
  if (parsed.data.website) {
    // Honeypot triggered - silently pretend success.
    return { success: true as const, delivered: false };
  }

  const { name, email, phone, office, subject, message } = parsed.data;

  const result = await sendFormNotification({
    subject: `New contact form submission from ${name}`,
    replyTo: email,
    html: renderFieldsHtml({
      Name: name,
      Email: email,
      Phone: phone,
      "Preferred Office": office,
      Subject: subject,
      Message: message,
    }),
  });

  return { success: true as const, delivered: result.delivered };
}
