"use server";

import { careersSchema, positionLabels, type CareersFormValues } from "@/lib/validations/careers";
import { sendFormNotification, renderFieldsHtml } from "@/lib/email";

export type CareersSubmission = CareersFormValues & {
  resume?: { filename: string; base64: string } | null;
};

export async function submitCareersForm(values: CareersSubmission) {
  const { resume, ...rest } = values;
  const parsed = careersSchema.safeParse(rest);
  if (!parsed.success) {
    return { success: false as const, delivered: false, error: "Invalid submission." };
  }
  if (parsed.data.website) {
    return { success: true as const, delivered: false };
  }

  const { name, email, phone, position, availability, message } = parsed.data;

  const result = await sendFormNotification({
    subject: `New job application from ${name}`,
    replyTo: email,
    html: renderFieldsHtml({
      Name: name,
      Email: email,
      Phone: phone,
      Position: positionLabels[position],
      Availability: availability,
      Message: message,
    }),
    attachments: resume
      ? [{ filename: resume.filename, content: Buffer.from(resume.base64, "base64") }]
      : undefined,
  });

  return { success: true as const, delivered: result.delivered };
}
