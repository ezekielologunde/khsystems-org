import { z } from "zod";

const ratingSchema = z.enum(["1", "2", "3", "4", "5"]);

export const satisfactionSurveySchema = z.object({
  visitDate: z.string().min(1, "Please enter your visit date"),
  serviceReceived: z.enum(["omhc", "prp", "medication-management", "other"]),
  schedulingRating: ratingSchema,
  courtesyRating: ratingSchema,
  qualityRating: ratingSchema,
  waitTimeRating: ratingSchema,
  overallRating: ratingSchema,
  comments: z.string().optional(),
  anonymous: z.boolean(),
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  website: z.string().max(0).optional(), // honeypot
});

export type SatisfactionSurveyFormValues = z.infer<typeof satisfactionSurveySchema>;

export const ratingFields: {
  key: "schedulingRating" | "courtesyRating" | "qualityRating" | "waitTimeRating" | "overallRating";
  label: string;
}[] = [
  { key: "schedulingRating", label: "Ease of scheduling" },
  { key: "courtesyRating", label: "Staff courtesy" },
  { key: "qualityRating", label: "Quality of care" },
  { key: "waitTimeRating", label: "Wait time" },
  { key: "overallRating", label: "Overall satisfaction" },
];
