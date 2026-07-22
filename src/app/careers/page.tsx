import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { CareersForm } from "@/components/forms/careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the King Health Systems, Inc. team - explore open positions and submit your application.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers"
        description="We appreciate your interest in joining King Health Systems, Inc. Qualified applicants will be contacted for an interview."
        image="/images/cta-support-team.jpg"
        imageAlt="A team member wearing a headset, ready to help"
      />
      <Section>
        <FadeIn className="mx-auto max-w-2xl">
          <CareersForm />
        </FadeIn>
      </Section>
    </>
  );
}
