import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { publishedArticles } from "@/lib/content/learn";
import { conditionPages } from "@/lib/content/conditions";
import { allNews, formatNewsDate } from "@/lib/content/news";
import { articlePhoto, deck } from "@/lib/content/editorial";

export const metadata: Metadata = {
  alternates: { canonical: "/learn" },
  title: "Learn: Mental Health Tips, Research & News",
  description:
    "Plain-language mental health articles, current research and tips from King Health Systems, Inc. in Maryland.",
};

export default function LearnPage() {
  const [lead, ...rest] = publishedArticles;
  const secondary = rest.slice(0, 3);
  const more = rest.slice(3);
  const news = allNews.slice(0, 4);

  return (
    <>
      {/* Masthead */}
      <header className="border-b border-border bg-background">
        <Container className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:py-20">
          <div>
            <h1 className="font-heading text-6xl font-semibold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Learn
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80">
              Plain-language guides on what research says, how care works, and how to get support
              in Maryland. Every article lists its sources and says how it was reviewed.
            </p>
          </div>
          <nav aria-label="Sections on this page" className="lg:justify-self-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-base font-semibold lg:flex-col lg:items-end lg:gap-y-0">
              {[
                ["Latest articles", "#articles"],
                ["From the news desk", "#news"],
                ["What we treat", "#conditions"],
                ["Check-ins", "#check-ins"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-block py-2 underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      <Container className="space-y-16 py-12 sm:space-y-20 sm:py-16">
        <CrisisBanner />

        {publishedArticles.length === 0 ? (
          <p className="text-muted-foreground">New articles are coming soon.</p>
        ) : (
          <section id="articles" aria-label="Latest articles" className="scroll-mt-24 space-y-14">
            {/* Lead story */}
            {lead ? (
              <FadeIn>
                <article className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-12">
                  <Link
                    href={`/learn/${lead.slug}`}
                    tabIndex={-1}
                    aria-hidden
                    className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:aspect-[3/2]"
                  >
                    <Image
                      src={articlePhoto(lead).src}
                      alt=""
                      fill
                      priority
                      sizes="(min-width:1024px) 56vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {lead.topic} · {lead.readingMinutes} min read
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
                      <Link href={`/learn/${lead.slug}`} className="decoration-2 underline-offset-4 hover:underline">
                        {lead.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-foreground/80">{deck(lead.shortAnswer)}</p>
                    <Link
                      href={`/learn/${lead.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-primary underline-offset-4 hover:underline"
                    >
                      Read the article <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ) : null}

            {/* Secondary stories */}
            {secondary.length ? (
              <div className="grid gap-x-8 gap-y-12 border-t-2 border-foreground pt-10 md:grid-cols-3">
                {secondary.map((a, i) => (
                  <FadeIn key={a.slug} delay={i * 0.06}>
                    <article className="group">
                      <Link
                        href={`/learn/${a.slug}`}
                        tabIndex={-1}
                        aria-hidden
                        className="relative block aspect-[3/2] overflow-hidden rounded-xl bg-muted"
                      >
                        <Image
                          src={articlePhoto(a).src}
                          alt=""
                          fill
                          sizes="(min-width:768px) 30vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </Link>
                      <p className="mt-4 text-sm font-semibold text-primary">
                        {a.topic} · {a.readingMinutes} min read
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-semibold leading-snug text-balance">
                        <Link href={`/learn/${a.slug}`} className="decoration-2 underline-offset-4 hover:underline">
                          {a.title}
                        </Link>
                      </h3>
                      <p className="mt-2 leading-relaxed text-foreground/75">{deck(a.description, 150)}</p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            ) : null}

            {/* More stories: a ruled list, like a table of contents */}
            {more.length ? (
              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-semibold">More to read</h2>
                <ul className="mt-4 divide-y divide-border">
                  {more.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/learn/${a.slug}`}
                        className="group grid gap-1 py-5 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-6"
                      >
                        <span className="text-sm font-semibold text-primary">{a.topic}</span>
                        <span>
                          <span className="font-heading text-xl font-semibold decoration-2 underline-offset-4 group-hover:underline">
                            {a.title}
                          </span>
                          <span className="mt-1 block text-foreground/70">{deck(a.description, 140)}</span>
                        </span>
                        <span className="text-sm text-muted-foreground">{a.readingMinutes} min read</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        )}

        {/* News desk + check-ins */}
        <section className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div id="news" className="scroll-mt-24">
            <div className="flex items-baseline justify-between gap-4 border-b-2 border-foreground pb-3">
              <h2 className="font-heading text-3xl font-semibold">From the news desk</h2>
              <Link href="/learn/news" className="inline-flex min-h-11 items-center font-bold text-primary underline-offset-4 hover:underline">
                All news
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {news.map((n) => (
                <li key={n.slug}>
                  <Link href={`/learn/news/${n.slug}`} className="group grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <time dateTime={n.date} className="text-sm font-semibold text-muted-foreground">
                      {formatNewsDate(n.date)}
                    </time>
                    <span>
                      <span className="font-heading text-xl font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
                        {n.title}
                      </span>
                      <span className="mt-1 block text-foreground/70">{deck(n.summary, 150)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside id="check-ins" className="scroll-mt-24 self-start rounded-2xl bg-secondary p-8 text-secondary-foreground">
            <h2 className="font-heading text-2xl font-semibold text-white">Check in with yourself</h2>
            <p className="mt-3 leading-relaxed text-secondary-foreground/85">
              Two short questionnaires, the PHQ-9 and GAD-7, look at mood and worry. They run in
              your browser, nothing is saved, and they are not a diagnosis.
            </p>
            <Link
              href="/learn/check-in"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent-yellow px-5 font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
            >
              Start a private check-in <ArrowRight className="size-4" aria-hidden />
            </Link>
          </aside>
        </section>

        {/* What we treat */}
        <section id="conditions" className="scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 border-b-2 border-foreground pb-3">
            <h2 className="font-heading text-3xl font-semibold">What we treat</h2>
            <Link href="/conditions" className="inline-flex min-h-11 items-center font-bold text-primary underline-offset-4 hover:underline">
              All conditions
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditionPages.map((c) => {
              const p = articlePhoto(c);
              return (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="group flex gap-4">
                    <span className="relative block size-24 shrink-0 overflow-hidden rounded-xl bg-muted sm:size-28">
                      <Image src={p.src} alt="" fill sizes="112px" className="object-cover" />
                    </span>
                    <span>
                      <span className="font-heading text-lg font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
                        {c.topic}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-foreground/70">
                        {deck(c.description, 90)}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </>
  );
}
