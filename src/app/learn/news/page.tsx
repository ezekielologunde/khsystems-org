import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { allNews, formatNewsDate } from "@/lib/content/news";

export const metadata: Metadata = {
  alternates: { canonical: "/learn/news" },
  title: "News: Maryland Medicaid & Mental Health Updates",
  description:
    "Plain-language updates on Maryland Medicaid and behavioral health, plus announcements from King Health Systems, Inc.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        image="/images/stock/stock-street.jpg"
        imageAlt="A tree-lined city sidewalk with brick buildings in warm evening light"
        eyebrow="News"
        title="News & Updates"
        description="Plain-language updates on Maryland Medicaid and behavioral health, with links to the official sources."
      />
      <Section>
        {allNews.length === 0 ? (
          <p className="text-muted-foreground">No news yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {allNews.map((n) => (
              <Link key={n.slug} href={`/learn/news/${n.slug}`} className="block">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {n.kind === "khs" ? "From King Health Systems" : "Policy update"} ·{" "}
                      {formatNewsDate(n.date)}
                    </p>
                    <CardTitle>{n.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{n.summary}</CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
        <p className="mt-8 text-sm text-muted-foreground">
          Policy updates summarize official sources and are for general information only. They are
          not legal or medical advice. Check the linked source for the current rules.
        </p>
      </Section>
    </>
  );
}
