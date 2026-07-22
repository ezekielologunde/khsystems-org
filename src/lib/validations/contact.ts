import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  office: z.enum(["baltimore", "laurel", "either"]),
  subject: z.enum(["general", "billing", "appointment", "feedback", "other"]),
  message: z.string().min(10, "Please enter at least 10 characters"),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormValues = z.infer<typeof contactSchema>;
