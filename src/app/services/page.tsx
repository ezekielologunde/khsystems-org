import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { ServiceCard } from "@/components/sections/service-card";
import {
  managedCareOrganizations,
  medicationDisclaimer,
} from "@/lib/content/company";
import { programs, getServicesByCategory } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "King Health Systems, Inc. offers Outpatient Mental Health Clinic (OMHC), Psychiatric Rehabilitation Program (PRP), and Medication Management services to Maryland Medicaid recipients.",
};

const categoryMeta = [
  { key: "omhc" as const, title: programs[0].title, description: programs[0].description },
  { key: "prp" as const, title: programs[1].title, description: programs[1].description },
  { key: "medication" as const, title: programs[2].title, description: programs[2].description },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        description="Eligibility is determined through an evaluation or a referral from a physician or agency. We accept Maryland Medicaid only, with no PCP referral required."
      />

      <Section>
        <FadeIn className="mx-auto max-w-3xl rounded-lg border border-border bg-muted p-6 text-sm">
          {medicationDisclaimer}
        </FadeIn>

        <div className="mt-12 space-y-16">
          {categoryMeta.map((category, i) => (
            <FadeIn key={category.key} delay={i * 0.05}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getServicesByCategory(category.key).map((service) => (
                  <ServiceCard
                    key={service.slug}
                    title={service.title}
                    summary={service.summary}
                    href={`/services/${service.slug}`}
                  />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-muted">
        <FadeIn>
          <h2 className="text-2xl font-bold">Insurance We Accept</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            We accept Maryland Medicaid at no cost to eligible clients through
            the following managed care organizations:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {managedCareOrganizations.map((mco) => (
              <Badge key={mco} variant="secondary" className="px-3 py-1.5 text-sm">
                {mco}
              </Badge>
            ))}
          </div>
          <Link
            href="/eligibility-and-payment"
            className="mt-6 inline-block text-sm font-medium text-primary hover:underline"
          >
            View full eligibility and payment details &rarr;
          </Link>
        </FadeIn>
      </Section>
    </>
  );
}
