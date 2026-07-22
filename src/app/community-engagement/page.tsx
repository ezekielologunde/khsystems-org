import type { Metadata } from "next";
import { HeartHandshake, Bus } from "lucide-react";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";

export const metadata: Metadata = {
  title: "Community Engagement",
  description:
    "King Health Systems, Inc. strives to be a positive influence in our community through pro-bono services and free transportation assistance.",
};

export default function CommunityEngagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Giving Back"
        title="Community Engagement"
        description="King Health Systems, Inc. consistently strives to be a positive influence within the community and to aid in strengthening families and improving our neighborhoods."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <FadeIn className="flex gap-4 rounded-lg border border-border bg-card p-6">
            <HeartHandshake className="size-8 shrink-0 text-primary" aria-hidden />
            <div>
              <h2 className="font-heading text-lg font-semibold">
                Limited Pro-Bono Services
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We offer a limited number of pro-bono services for
                individuals with mental health needs who are not currently
                eligible for our regular services.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="flex gap-4 rounded-lg border border-border bg-card p-6">
            <Bus className="size-8 shrink-0 text-primary" aria-hidden />
            <div>
              <h2 className="font-heading text-lg font-semibold">
                Free Transportation Assistance
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A limited number of free transportation slots are available
                to and from our clinic for therapy sessions, for clients
                located in the 21215 zip code.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
