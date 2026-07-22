import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  office: z.enum(["baltimore", "laurel"]),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  preferredTime: z.enum(["morning", "afternoon"]),
  reason: z.enum([
    "new-client",
    "follow-up",
    "medication-management",
    "therapy",
    "other",
  ]),
  clientStatus: z.enum(["new", "existing"]),
  medicaidConfirmed: z.literal(true, {
    message: "Please confirm your Medicaid status to continue",
  }),
  notes: z.string().optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const reasonLabels: Record<AppointmentFormValues["reason"], string> = {
  "new-client": "New Client Intake",
  "follow-up": "Follow-up Visit",
  "medication-management": "Medication Management",
  therapy: "Therapy Session",
  other: "Other",
};
