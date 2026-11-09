import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { Button } from "@/components/ui/button";
import { indeedJobsUrl } from "@/lib/content/company";
import { CareersForm } from "@/components/forms/careers-form";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
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
          <div className="mb-10 rounded-lg border border-border bg-muted p-6 text-center">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Current Openings
            </h2>
            <p className="mt-2 text-sm text-foreground/90">
              Visit Indeed to see current opportunities, position requirements,
              and available locations.
            </p>
            <Button
              render={
                <a href={indeedJobsUrl} target="_blank" rel="noopener noreferrer" />
              }
              className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              View Current Openings on Indeed
            </Button>
          </div>
          <CareersForm />
        </FadeIn>
      </Section>
    </>
  );
}
