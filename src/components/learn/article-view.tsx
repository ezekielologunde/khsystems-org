import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { YouTubeEmbed } from "@/components/learn/youtube-embed";
import { publishedArticles, reviewLabel, type LearnArticle } from "@/lib/content/learn";
import { conditionPages } from "@/lib/content/conditions";
import { articlePhoto, deck } from "@/lib/content/editorial";
import { company } from "@/lib/content/company";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Shared sourced-article layout, used by /learn/[slug] and /conditions/[slug]. */
export function ArticleView({ a, basePath }: { a: LearnArticle; basePath: string }) {
  const photo = articlePhoto(a);
  const isCondition = basePath === "/conditions";
  const related = (isCondition ? conditionPages : publishedArticles).filter((x) => x.slug !== a.slug).slice(0, 3);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: a.title,
      description: a.description,
      dateModified: a.review!.date,
      // Only claim a reviewer in structured data when a clinician actually reviewed it.
      ...(a.review!.type === "clinician"
        ? { lastReviewed: a.review!.date, reviewedBy: { "@type": "Person", name: a.review!.by } }
        : {}),
      publisher: { "@type": "Organization", name: company.name },
      mainEntityOfPage: `https://www.khsystems.org${basePath}/${a.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const toc = [
    ...a.sections.map((s) => ({ id: slugify(s.heading), label: s.heading })),
    { id: "questions", label: "Common questions" },
    { id: "get-help", label: "When to get help" },
    { id: "sources", label: "Sources" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-border bg-background">
        <Container className="py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold">
            <Link
              href={isCondition ? "/conditions" : "/learn"}
              className="inline-flex min-h-11 items-center text-primary underline-offset-4 hover:underline"
            >
              &larr; {isCondition ? "What we treat" : "Learn"}
            </Link>
          </nav>
          <p className="mt-4 text-base font-semibold text-primary">
            {a.topic} · {a.readingMinutes} min read
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl">
            {a.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-foreground/80">{a.description}</p>
          <p className="mt-5 max-w-3xl border-l-4 border-accent-yellow pl-4 text-sm text-muted-foreground">
            {reviewLabel(a.review!)}
          </p>
        </Container>
      </header>

      <Container className="pt-8 sm:pt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted sm:aspect-[21/9]">
          <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width:1536px) 1400px, 100vw" className="object-cover" />
        </div>
      </Container>

      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <aside aria-label="In this article" className="hidden self-start lg:sticky lg:top-28 lg:block">
          <p className="border-b-2 border-foreground pb-2 font-heading text-lg font-semibold">In this article</p>
          <ol className="mt-3 space-y-1 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="block py-1.5 leading-snug text-foreground/80 hover:text-primary hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="max-w-3xl space-y-8">
          <CrisisBanner />
          <p className="font-heading text-2xl font-medium leading-snug text-foreground sm:text-[1.7rem]">{a.shortAnswer}</p>

          <section aria-labelledby="glance" className="rounded-2xl bg-muted p-6 sm:p-8">
            <h2 id="glance" className="font-heading text-xl font-semibold">
              At a glance
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              {a.keyTakeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          {a.videos.map((v) => (
            <YouTubeEmbed key={v.id} id={v.id} title={v.title} channel={v.channel} />
          ))}

          {a.sections.map((s) => (
            <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28 space-y-4">
              <h2 className="font-heading text-3xl font-semibold leading-tight">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-[1.75] text-foreground/90">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section id="questions" className="scroll-mt-28 space-y-3">
            <h2 className="font-heading text-3xl font-semibold">Common questions</h2>
            {a.faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border p-4">
                <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
                <p className="mt-2 leading-relaxed text-foreground/90">{f.a}</p>
              </details>
            ))}
          </section>

          <section id="get-help" className="scroll-mt-28 rounded-2xl bg-secondary p-6 text-secondary-foreground sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-white">When to get help</h2>
            <p className="mt-3 text-lg leading-relaxed text-secondary-foreground/90">{a.whenToGetHelp}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                render={<Link href="/appointments" />}
                className="min-h-12 bg-accent-yellow font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
              >
                Request an appointment
              </Button>
              <Button
                render={<a href={company.phoneHref} />}
                variant="outline"
                className="min-h-12 border-white/50 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
              >
                Call {company.phone}
              </Button>
            </div>
          </section>

          <section id="sources" className="scroll-mt-28">
            <h2 className="font-heading text-xl font-semibold">Sources</h2>
            <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-muted-foreground">
              {a.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline">
                    {s.title}
                  </a>{" "}
                  — {s.publisher}
                  {s.year ? `, ${s.year}` : ""}
                </li>
              ))}
            </ol>
          </section>
        </article>
      </Container>

      {related.length ? (
        <section aria-labelledby="keep-reading" className="border-t border-border bg-muted/50">
          <Container className="py-12 sm:py-16">
            <h2 id="keep-reading" className="border-b-2 border-foreground pb-3 font-heading text-3xl font-semibold">
              Keep reading
            </h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((r) => {
                const p = articlePhoto(r);
                return (
                  <li key={r.slug}>
                    <Link href={`${basePath}/${r.slug}`} className="group block">
                      <span className="relative block aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                        <Image src={p.src} alt="" fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      </span>
                      <span className="mt-4 block text-sm font-semibold text-primary">{r.topic}</span>
                      <span className="mt-1 block font-heading text-xl font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
                        {r.title}
                      </span>
                      <span className="mt-1 block text-sm text-foreground/70">{deck(r.description, 110)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
