import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { publishedArticles } from "@/lib/content/learn";

export const metadata: Metadata = {
  alternates: { canonical: "/learn" },
  title: "Learn: Mental Health Tips, Research & News",
  description:
    "Plain-language mental health articles, current research and tips from King Health Systems, Inc. in Maryland.",
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Mental Health Tips & Research"
        description="Plain-language guides on what the latest research says, how care works, and how to get support in Maryland."
      />
      <Section>
        <div className="mb-8 space-y-4">
          <CrisisBanner />
          <Link
            href="/learn/check-in"
            className="block rounded-lg border border-border bg-muted p-5 font-semibold hover:shadow-md"
          >
            Free &amp; private depression and anxiety check-ins (PHQ-9, GAD-7) →
          </Link>
          <Link
            href="/learn/news"
            className="block rounded-lg border border-border bg-muted p-5 font-semibold hover:shadow-md"
          >
            News &amp; updates on Maryland Medicaid and mental health →
          </Link>
        </div>
        {publishedArticles.length === 0 ? (
          <p className="text-muted-foreground">New articles are coming soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedArticles.map((a, i) => (
              <FadeIn key={a.slug} delay={(i % 3) * 0.06}>
                <Link href={`/learn/${a.slug}`} className="block h-full">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {a.topic} · {a.readingMinutes} min read
                      </p>
                      <CardTitle>{a.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      {a.description}
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
