"use server";

import {
  satisfactionSurveySchema,
  type SatisfactionSurveyFormValues,
} from "@/lib/validations/satisfaction-survey";
import { sendFormNotification, renderFieldsHtml } from "@/lib/email";

export async function submitSatisfactionSurvey(values: SatisfactionSurveyFormValues) {
  const parsed = satisfactionSurveySchema.safeParse(values);
  if (!parsed.success) {
    return { success: false as const, delivered: false, error: "Invalid submission." };
  }
  if (parsed.data.website) {
    return { success: true as const, delivered: false };
  }

  const {
    visitDate,
    serviceReceived,
    schedulingRating,
    courtesyRating,
    qualityRating,
    waitTimeRating,
    overallRating,
    comments,
    anonymous,
    name,
    email,
  } = parsed.data;

  const result = await sendFormNotification({
    subject: `New client satisfaction survey submission`,
    replyTo: anonymous ? undefined : email || undefined,
    html: renderFieldsHtml({
      "Visit Date": visitDate,
      "Service Received": serviceReceived,
      "Ease of Scheduling": schedulingRating,
      "Staff Courtesy": courtesyRating,
      "Quality of Care": qualityRating,
      "Wait Time": waitTimeRating,
      Overall: overallRating,
      Comments: comments,
      Submitted: anonymous ? "Anonymously" : `${name || "N/A"} (${email || "no email"})`,
    }),
  });

  return { success: true as const, delivered: result.delivered };
}
