import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-border bg-background">
        <Container className="py-10 sm:py-14">
          <nav aria-label="Breadcrumb">
            <Link
              href="/learn/news"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              &larr; News
            </Link>
          </nav>
          <p className="mt-4 text-base font-semibold text-primary">
            {n.kind === "khs" ? "From King Health Systems" : "Policy update"} ·{" "}
            <time dateTime={n.date}>{formatNewsDate(n.date)}</time>
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl">
            {n.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-foreground/80">{n.summary}</p>
          {n.source ? (
            <p className="mt-5 max-w-3xl border-l-4 border-accent-yellow pl-4 text-sm text-muted-foreground">
              Summarized from {n.source.publisher}. Checked against the source on the date shown.
            </p>
          ) : null}
        </Container>
      </header>
      <Container className="py-12 sm:py-16">
        <article className="mx-auto max-w-3xl space-y-6">
          {n.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-[1.75] text-foreground/90">
              {p}
            </p>
          ))}
          {n.whatItMeansForClients ? (
            <section className="rounded-2xl border-l-4 border-primary bg-muted p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold">What this may mean for you</h2>
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
      </Container>
    </>
  );
}
