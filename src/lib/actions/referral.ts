"use server";

import {
  referralSchema,
  programLabels,
  type ReferralFormValues,
} from "@/lib/validations/referral";
import { sendFormNotification, renderFieldsHtml } from "@/lib/email";

export async function submitReferralForm(values: ReferralFormValues) {
  const parsed = referralSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false as const, delivered: false, error: "Invalid submission." };
  }
  if (parsed.data.website) {
    return { success: true as const, delivered: false };
  }

  const {
    referrerName,
    referrerRelationship,
    referrerPhone,
    referrerEmail,
    clientName,
    clientDob,
    clientPhone,
    clientAddress,
    clientInsurance,
    preferredOffice,
    programRequested,
    reason,
    urgency,
    knownDiagnoses,
  } = parsed.data;

  const result = await sendFormNotification({
    subject: `New referral submitted for ${clientName} (${urgency})`,
    replyTo: referrerEmail,
    html: renderFieldsHtml({
      "Referring Party": referrerName,
      "Relationship to Client": referrerRelationship,
      "Referrer Phone": referrerPhone,
      "Referrer Email": referrerEmail,
      "Client Name": clientName,
      "Client DOB": clientDob,
      "Client Phone": clientPhone,
      "Client Address": clientAddress,
      "Client Insurance / MCO": clientInsurance,
      "Preferred Office": preferredOffice,
      "Program Requested": programLabels[programRequested],
      Urgency: urgency,
      "Reason for Referral": reason,
      "Known Diagnoses": knownDiagnoses,
    }),
  });

  return { success: true as const, delivered: result.delivered };
}
