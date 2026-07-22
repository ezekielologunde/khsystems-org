import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "About Us",
  description: company.mission,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        description="Culturally sensitive, high-quality mental health care for Maryland Medicaid recipients across Baltimore and Prince George's County."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2 space-y-4">
            <p className="leading-relaxed text-foreground/90">
              {company.name} offers psychiatric rehabilitation services,
              outpatient therapy, and medication management to Maryland
              residents with Medicaid. We serve children, adolescents, and
              adults through on-site, off-site, and telehealth appointments.
            </p>
            <p className="leading-relaxed text-foreground/90">
              Our goals are to help clients build independent living skills,
              reduce symptoms, and reduce the need for inpatient
              hospitalization. We partner with local doctors and healthcare
              professionals to provide holistic care, and clients are
              involved in choosing their providers and shaping their own
              treatment goals.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border bg-muted p-6">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Our Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {company.mission}
              </p>
              <Button
                render={<Link href="/services" />}
                className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Explore Our Services
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
