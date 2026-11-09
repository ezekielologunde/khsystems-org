import { learnArticles } from "@/lib/content/learn-articles";

export type LearnSource = { title: string; publisher: string; year?: string; url: string };
export type LearnVideo = { id: string; title: string; channel: string };

/**
 * How an article was reviewed. Be honest here: it is shown on the page.
 * - "ai": AI-drafted and fact-checked against the cited sources. Not clinician-reviewed.
 * - "clinician": a named KHS clinician reviewed it (set `by`).
 */
export type LearnReview =
  | { type: "ai"; date: string }
  | { type: "clinician"; by: string; date: string };

export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  readingMinutes: number;
  shortAnswer: string;
  keyTakeaways: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  whenToGetHelp: string;
  sources: LearnSource[];
  videos: LearnVideo[];
  /** Absent = draft, not published. */
  review?: LearnReview;
};

export const allArticles: LearnArticle[] = learnArticles;

// Only articles with a recorded review are published.
export const publishedArticles: LearnArticle[] = allArticles.filter((a) => Boolean(a.review));

export function getArticle(slug: string) {
  return publishedArticles.find((a) => a.slug === slug);
}

export function reviewLabel(r: LearnReview) {
  return r.type === "clinician"
    ? `Reviewed by ${r.by} on ${r.date}`
    : `AI-drafted and fact-checked against the sources listed below on ${r.date}. Not reviewed by a clinician.`;
}
