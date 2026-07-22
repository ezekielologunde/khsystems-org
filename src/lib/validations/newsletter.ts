import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  website: z.string().max(0).optional(), // honeypot
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
