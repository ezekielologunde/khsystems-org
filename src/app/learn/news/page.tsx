import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import { Container } from "@/components/layout/container";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { allNews, formatNewsDate } from "@/lib/content/news";
import { deck } from "@/lib/content/editorial";

export const metadata: Metadata = {
  alternates: { canonical: "/learn/news" },
  title: "News: Maryland Medicaid & Mental Health Updates",
  description:
    "Plain-language updates on Maryland Medicaid and behavioral health, plus announcements from King Health Systems, Inc.",
};

export default function NewsPage() {
  const [lead, ...rest] = allNews;
  const years = Array.from(new Set(rest.map((n) => n.date.slice(0, 4))));
  const publishers = Array.from(new Set(allNews.map((n) => n.source?.publisher).filter(Boolean))) as string[];

  return (
    <>
      <header className="border-b border-border bg-background">
        <Container className="py-12 sm:py-16 lg:py-20">
          <h1 className="font-heading text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
            News
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80">
            Plain-language updates on Maryland Medicaid and behavioral health, with a link to the
            official source for every item.
          </p>
          {lead ? (
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              Latest update: {formatNewsDate(lead.date)}
            </p>
          ) : null}
        </Container>
      </header>

      <Container className="py-12 sm:py-16">
        {allNews.length === 0 || !lead ? (
          <p className="text-muted-foreground">No news yet. Check back soon.</p>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div className="space-y-14">
              {/* Lead story */}
              <article className="border-b-2 border-foreground pb-12">
                <p className="text-sm font-semibold text-primary">
                  {lead.kind === "khs" ? "From King Health Systems" : "Policy update"} ·{" "}
                  <time dateTime={lead.date}>{formatNewsDate(lead.date)}</time>
                </p>
                <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                  <Link href={`/learn/news/${lead.slug}`} className="decoration-2 underline-offset-4 hover:underline">
                    {lead.title}
                  </Link>
                </h2>
                <p className="mt-5 max-w-3xl text-xl leading-relaxed text-foreground/85">{lead.summary}</p>
                {lead.whatItMeansForClients ? (
                  <blockquote className="mt-8 max-w-3xl border-l-4 border-primary bg-muted py-4 pl-6 pr-4">
                    <p className="font-heading text-lg font-semibold">What this may mean for you</p>
                    <p className="mt-1 leading-relaxed text-foreground/85">{deck(lead.whatItMeansForClients, 260)}</p>
                  </blockquote>
                ) : null}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Link
                    href={`/learn/news/${lead.slug}`}
                    className="inline-flex min-h-11 items-center gap-2 font-bold text-primary underline-offset-4 hover:underline"
                  >
                    Read the full update <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  {lead.source ? (
                    <span className="text-sm text-muted-foreground">Source: {lead.source.publisher}</span>
                  ) : null}
                </div>
              </article>

              {/* Earlier updates, grouped by year */}
              {years.map((y) => (
                <section key={y} aria-labelledby={`y-${y}`}>
                  <h2 id={`y-${y}`} className="font-heading text-3xl font-semibold">
                    {y}
                  </h2>
                  <ul className="mt-4 divide-y divide-border border-t border-border">
                    {rest
                      .filter((n) => n.date.startsWith(y))
                      .map((n) => (
                        <li key={n.slug}>
                          <Link
                            href={`/learn/news/${n.slug}`}
                            className="group grid gap-1 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
                          >
                            <time dateTime={n.date} className="text-sm font-semibold text-muted-foreground sm:pt-1.5">
                              {formatNewsDate(n.date)}
                            </time>
                            <span>
                              <span className="font-heading text-2xl font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
                                {n.title}
                              </span>
                              <span className="mt-2 block leading-relaxed text-foreground/75">{n.summary}</span>
                              {n.source ? (
                                <span className="mt-2 block text-sm text-muted-foreground">
                                  {n.kind === "khs" ? "From King Health Systems" : `Source: ${n.source.publisher}`}
                                </span>
                              ) : null}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </section>
              ))}
            </div>

            <aside className="space-y-8 self-start lg:sticky lg:top-28">
              <CrisisBanner />
              <section className="border-t-2 border-foreground pt-4">
                <h2 className="font-heading text-xl font-semibold">About these updates</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  We summarize official sources in plain language and check each summary against
                  them. They are general information, not legal or medical advice. Rules change, so
                  always check the linked source.
                </p>
              </section>
              {publishers.length ? (
                <section className="border-t-2 border-foreground pt-4">
                  <h2 className="font-heading text-xl font-semibold">Where the news comes from</h2>
                  <ul className="mt-2 space-y-1 text-sm text-foreground/80">
                    {publishers.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
              <section className="border-t-2 border-foreground pt-4">
                <h2 className="font-heading text-xl font-semibold">Follow along</h2>
                <a
                  href="/learn/news/rss.xml"
                  className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
                >
                  <Rss className="size-4" aria-hidden /> News feed (RSS)
                </a>
                <br />
                <Link
                  href="/learn"
                  className="inline-flex min-h-11 items-center text-sm font-bold text-primary underline-offset-4 hover:underline"
                >
                  Back to Learn
                </Link>
              </section>
            </aside>
          </div>
        )}
      </Container>
    </>
  );
}
