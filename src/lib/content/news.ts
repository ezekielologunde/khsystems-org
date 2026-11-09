import { newsItems } from "@/lib/content/news-items";

export type NewsItem = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD). For policy items, the official source's own date. */
  date: string;
  summary: string;
  paragraphs: string[];
  whatItMeansForClients?: string;
  /** "khs" = announcement from King Health Systems; "policy" = summary of an official source. */
  kind: "khs" | "policy";
  /** Required for policy items. */
  source?: { title: string; publisher: string; url: string };
};

export const allNews: NewsItem[] = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

export function getNews(slug: string) {
  return allNews.find((n) => n.slug === slug);
}

export function formatNewsDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
