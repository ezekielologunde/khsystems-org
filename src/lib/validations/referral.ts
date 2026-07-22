import { z } from "zod";

export const referralSchema = z.object({
  // Referring party
  referrerName: z.string().min(2, "Please enter the referring party's name"),
  referrerRelationship: z.string().min(2, "Please enter your relationship to the client"),
  referrerPhone: z.string().min(7, "Please enter a valid phone number"),
  referrerEmail: z.string().email("Please enter a valid email address"),
  // Client info
  clientName: z.string().min(2, "Please enter the client's full name"),
  clientDob: z.string().min(1, "Please enter the client's date of birth"),
  clientPhone: z.string().min(7, "Please enter a valid phone number"),
  clientAddress: z.string().min(5, "Please enter the client's address"),
  clientInsurance: z.string().min(2, "Please enter the client's insurance / MCO"),
  preferredOffice: z.enum(["baltimore", "laurel", "either"]),
  // Referral details
  programRequested: z.enum(["omhc", "prp", "not-sure"]),
  reason: z.string().min(10, "Please describe the reason for referral"),
  urgency: z.enum(["routine", "urgent"]),
  knownDiagnoses: z.string().optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type ReferralFormValues = z.infer<typeof referralSchema>;

export const programLabels: Record<ReferralFormValues["programRequested"], string> = {
  omhc: "Outpatient Mental Health Clinic (OMHC)",
  prp: "Psychiatric Rehabilitation Program (PRP)",
  "not-sure": "Not sure / need guidance",
};
