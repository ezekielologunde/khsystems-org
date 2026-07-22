import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Transit Assistance",
  description:
    "MDOT Reduced Fare application information for King Health Systems, Inc. clients.",
};

export default function TransitAssistancePage() {
  return (
    <>
      <PageHero
        eyebrow="Getting Here"
        title="Transit Assistance"
        description="The Maryland Department of Transportation (MDOT) offers a Reduced Fare program for eligible riders, including Medicare recipients."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>MDOT Reduced Fare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Contact our office to receive your MDOT Reduced Fare
                  application and e-signature link.
                </p>
                <Button
                  render={<a href={`mailto:${company.email}?subject=MDOT Reduced Fare Application Request`} />}
                  variant="outline"
                  className="gap-2"
                >
                  Request Application <ExternalLink className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>MDOT Reduced Fare - Medicare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Medicare recipients can request the Medicare-specific
                  version of the Reduced Fare application through our office.
                </p>
                <Button
                  render={<a href={`mailto:${company.email}?subject=MDOT Reduced Fare Medicare Application Request`} />}
                  variant="outline"
                  className="gap-2"
                >
                  Request Application <ExternalLink className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
