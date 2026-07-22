import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { SatisfactionSurveyForm } from "@/components/forms/satisfaction-survey-form";

export const metadata: Metadata = {
  title: "Client Satisfaction Survey",
  description:
    "Rate your experience with King Health Systems, Inc. staff and services.",
};

export default function SatisfactionSurveyPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Feedback Matters"
        title="Client Satisfaction Survey"
        description="Please rate our staff and services - your feedback helps us continue to improve."
      />
      <Section>
        <FadeIn className="mx-auto max-w-2xl">
          <SatisfactionSurveyForm />
        </FadeIn>
      </Section>
    </>
  );
}
