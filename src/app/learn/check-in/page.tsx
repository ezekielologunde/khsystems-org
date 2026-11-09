import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { screeners } from "@/lib/content/screeners";

export const metadata: Metadata = {
  alternates: { canonical: "/learn/check-in" },
  title: "Free Mental Health Check-ins (Depression & Anxiety)",
  description:
    "Free, private depression (PHQ-9) and anxiety (GAD-7) check-ins. Answers stay in your browser. Not a diagnosis.",
};

export default function CheckInIndexPage() {
  return (
    <>
      <PageHero
        image="/images/stock/stock-window.jpg"
        imageAlt="Sunlight from a tall window across a quiet room"
        eyebrow="Check-ins"
        title="Free & Private Check-ins"
        description="Short, widely used questionnaires that can help you decide whether to talk with someone. Your answers are never saved or sent."
      />
      <Section>
        <div className="mb-8 space-y-4">
          <CrisisBanner />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {screeners.map((s) => (
            <Link key={s.id} href={`/learn/check-in/${s.slug}`} className="block">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{s.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {s.description}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
