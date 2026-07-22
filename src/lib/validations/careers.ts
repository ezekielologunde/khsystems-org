import { z } from "zod";

export const careersSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  position: z.enum([
    "general",
    "therapist",
    "rehab-counselor",
    "psychiatric-nurse-practitioner",
    "administrative",
  ]),
  availability: z.string().min(2, "Please share your availability"),
  message: z.string().optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type CareersFormValues = z.infer<typeof careersSchema>;

export const positionLabels: Record<CareersFormValues["position"], string> = {
  general: "General Application",
  therapist: "Therapist (LMSW / LGPC / LCSW-C / LCPC)",
  "rehab-counselor": "PRP Rehabilitation Counselor",
  "psychiatric-nurse-practitioner": "Psychiatric Nurse Practitioner (CRNP-PMH)",
  administrative: "Administrative / Front Office",
};
