import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { ScreenerQuiz } from "@/components/learn/screener-quiz";
import { getScreener, screeners } from "@/lib/content/screeners";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return screeners.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getScreener(slug);
  if (!s) return {};
  return {
    alternates: { canonical: `/learn/check-in/${s.slug}` },
    title: s.name,
    description: `${s.description} Free and private. Not a diagnosis.`,
  };
}

export default async function CheckInPage({ params }: Props) {
  const { slug } = await params;
  const s = getScreener(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero eyebrow="Check-in" title={s.name} description={s.description} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <CrisisBanner />
          <p className="text-sm text-muted-foreground">
            Private: your answers stay in this browser tab and are not saved, sent or tracked.
            This is a screening tool, not a diagnosis.
          </p>
          <ScreenerQuiz screener={s} />
          <p className="border-t border-border pt-4 text-xs text-muted-foreground">
            Source: {s.source.name}{" "}
            <a href={s.source.url} target="_blank" rel="noopener noreferrer" className="underline">
              PubMed
            </a>
            . The PHQ-9 and GAD-7 are in the public domain.
          </p>
        </div>
      </Section>
    </>
  );
}
