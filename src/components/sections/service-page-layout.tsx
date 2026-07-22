import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import type { ServicePageContent } from "@/lib/content/services";
import { Button } from "@/components/ui/button";

const categoryLabel: Record<ServicePageContent["category"], string> = {
  omhc: "Outpatient Mental Health Clinic",
  prp: "Psychiatric Rehabilitation Program",
  medication: "Medication Management",
};

export function ServicePageLayout({ service }: { service: ServicePageContent }) {
  return (
    <>
      <PageHero eyebrow={categoryLabel[service.category]} title={service.title} description={service.summary} />
      <Section>
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/services" />}>
                Our Services
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2 space-y-4">
            {service.body.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}

            {service.bullets && service.bullets.length > 0 ? (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 rounded-md bg-muted px-3 py-2 text-sm"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card>
              <CardContent className="space-y-4 pt-6">
                {service.facts && service.facts.length > 0 ? (
                  <dl className="space-y-3">
                    {service.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {fact.label}
                        </dt>
                        <dd className="text-sm">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <div className="space-y-2">
                  <Button
                    render={<Link href="/appointments" />}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Request an Appointment
                  </Button>
                  <Button render={<Link href="/referrals" />} variant="outline" className="w-full">
                    Make a Referral
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
