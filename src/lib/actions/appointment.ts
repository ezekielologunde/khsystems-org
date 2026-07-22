"use server";

import {
  appointmentSchema,
  reasonLabels,
  type AppointmentFormValues,
} from "@/lib/validations/appointment";
import { sendFormNotification, renderFieldsHtml } from "@/lib/email";

export async function submitAppointmentForm(values: AppointmentFormValues) {
  const parsed = appointmentSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false as const, delivered: false, error: "Invalid submission." };
  }
  if (parsed.data.website) {
    return { success: true as const, delivered: false };
  }

  const {
    name,
    email,
    phone,
    office,
    preferredDate,
    preferredTime,
    reason,
    clientStatus,
    notes,
  } = parsed.data;

  const result = await sendFormNotification({
    subject: `New appointment request from ${name}`,
    replyTo: email,
    html: renderFieldsHtml({
      Name: name,
      Email: email,
      Phone: phone,
      Office: office,
      "Preferred Date": preferredDate,
      "Preferred Time": preferredTime,
      Reason: reasonLabels[reason],
      "Client Status": clientStatus,
      Notes: notes,
    }),
  });

  return { success: true as const, delivered: result.delivered };
}
