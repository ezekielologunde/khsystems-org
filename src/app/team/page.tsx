import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { clinicians } from "@/lib/content/clinicians";

export const metadata: Metadata = {
  alternates: { canonical: "/team" },
  title: "Our Clinicians",
  description:
    "Meet the licensed therapists at King Health Systems, Inc. See ages served, focus areas, and virtual or in-person availability. Maryland Medicaid accepted.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Our Clinicians"
        description="Get to know the clinicians who support your goals and recovery."
        image="/images/cta-support-team.jpg"
        imageAlt="A team member wearing a headset, ready to help"
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinicians.map((c, i) => (
            <FadeIn key={c.name} delay={(i % 3) * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{c.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{c.credentials}</p>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p>{c.ages}</p>
                  <p>{c.focus}</p>
                  {c.availability ? <p className="font-medium">{c.availability}</p> : null}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
