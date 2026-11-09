import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { allNews, formatNewsDate, getNews } from "@/lib/content/news";
import { company } from "@/lib/content/company";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allNews.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return {};
  return {
    alternates: { canonical: `/learn/news/${n.slug}` },
    title: n.title,
    description: n.summary,
    openGraph: { type: "article", title: n.title, description: n.summary },
  };
}

export default async function NewsItemPage({ params }: Props) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: n.title,
    description: n.summary,
    datePublished: n.date,
    dateModified: n.date,
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: `https://www.khsystems.org/learn/news/${n.slug}`,
  };

  return (
    <>
      <PageHero
        eyebrow={`${n.kind === "khs" ? "From King Health Systems" : "Policy update"} · ${formatNewsDate(n.date)}`}
        title={n.title}
        description={n.summary}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section>
        <article className="mx-auto max-w-3xl space-y-5">
          {n.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
          {n.whatItMeansForClients ? (
            <section className="rounded-lg border border-border bg-muted p-6">
              <h2 className="font-heading text-lg font-semibold">What this may mean for you</h2>
              <p className="mt-2 leading-relaxed">{n.whatItMeansForClients}</p>
            </section>
          ) : null}
          {n.source ? (
            <p className="text-sm text-muted-foreground">
              Source:{" "}
              <a href={n.source.url} target="_blank" rel="noopener noreferrer" className="underline">
                {n.source.title}
              </a>{" "}
              — {n.source.publisher}. This summary is general information, not legal or medical
              advice. Check the source for current rules.
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              render={<Link href="/appointments" />}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Request an appointment
            </Button>
            <Button render={<a href={company.phoneHref} />} variant="outline">
              Call {company.phone}
            </Button>
          </div>
        </article>
      </Section>
    </>
  );
}
