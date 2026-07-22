import type { Metadata } from "next";
import { Clock, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { company, offices } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Our Location",
  description:
    "King Health Systems, Inc. has two office locations in Baltimore and Laurel, Maryland.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Our Location"
        description="We're proud to serve clients from two convenient Maryland office locations."
        image="/images/hero-family.jpg"
        imageAlt="A family sitting together outdoors, supporting one another"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {offices.map((office, i) => (
            <FadeIn key={office.id} delay={i * 0.08}>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <iframe
                    title={`Map to ${office.name}`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      office.mapQuery
                    )}&output=embed`}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{office.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    {office.addressLines.join(", ")}
                    <br />
                    {office.city}, {office.state} {office.zip}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="size-4" aria-hidden />
                    {company.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="size-4" aria-hidden />
                    {company.hours}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
