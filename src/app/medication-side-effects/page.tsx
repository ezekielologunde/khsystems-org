import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { medications } from "@/lib/content/medications";
import { medicationDisclaimer } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Possible Medication Side Effects",
  description:
    "General information about common side effects for medications prescribed through our Medication Management program.",
};

export default function MedicationSideEffectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Medication Management"
        title="Possible Medication Side Effects"
        description="General reference information on common side effects for medications our providers may prescribe."
      />
      <Section>
        <FadeIn className="mb-10 flex gap-3 rounded-lg border border-accent/30 bg-accent/10 p-5 text-sm">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
          <p>
            This page provides general, publicly available side-effect
            information for reference only - it is not a substitute for
            guidance from your prescriber. {medicationDisclaimer} Always
            contact your care team with questions about your specific
            medication or if you experience side effects.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {medications.map((med, i) => (
            <FadeIn key={med.slug} delay={(i % 6) * 0.04}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">
                    {med.genericName}
                    <span className="block text-sm font-normal text-muted-foreground">
                      {med.brandName}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="secondary">{med.drugClass}</Badge>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {med.commonSideEffects.map((effect) => (
                      <li key={effect}>{effect}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
