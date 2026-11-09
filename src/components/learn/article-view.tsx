import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { CrisisBanner } from "@/components/learn/crisis-banner";
import { YouTubeEmbed } from "@/components/learn/youtube-embed";
import { reviewLabel, type LearnArticle } from "@/lib/content/learn";
import { company } from "@/lib/content/company";

/** Shared sourced-article layout, used by /learn/[slug] and /conditions/[slug]. */
export function ArticleView({ a, basePath }: { a: LearnArticle; basePath: string }) {
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

  return (
    <>
      <PageHero image={a.heroImage} imageAlt={a.heroImageAlt} eyebrow={a.topic} title={a.title} description={a.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section>
        <article className="mx-auto max-w-3xl space-y-6">
          <CrisisBanner />
          <p className="text-sm text-muted-foreground">
            {a.readingMinutes} min read · {reviewLabel(a.review!)}
          </p>
          <p className="text-xl font-medium leading-relaxed">{a.shortAnswer}</p>
          <ul className="list-disc space-y-2 rounded-lg bg-muted p-6 pl-10">
            {a.keyTakeaways.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {a.videos.map((v) => (
            <YouTubeEmbed key={v.id} id={v.id} title={v.title} channel={v.channel} />
          ))}
          {a.sections.map((s) => (
            <section key={s.heading} className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-foreground/90">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Common questions</h2>
            {a.faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-border p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-foreground/90">{f.a}</p>
              </details>
            ))}
          </section>
          <section className="rounded-lg border border-border bg-muted p-6">
            <h2 className="font-heading text-xl font-semibold">When to get help</h2>
            <p className="mt-2 leading-relaxed">{a.whenToGetHelp}</p>
            <div className="mt-4 flex flex-wrap gap-3">
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
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold">Sources</h2>
            <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-muted-foreground">
              {a.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {s.title}
                  </a>{" "}
                  — {s.publisher}
                  {s.year ? `, ${s.year}` : ""}
                </li>
              ))}
            </ol>
          </section>
        </article>
      </Section>
    </>
  );
}