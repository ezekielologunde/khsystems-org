import raw from "@/lib/content/condition-pages.json";
import type { LearnArticle } from "@/lib/content/learn";

// AI-drafted and fact-checked against cited sources (2026-11-09). Not clinician-reviewed.
// Same honesty rules as the Learn articles: the review label is shown on every page.
const HERO: Record<string, { src: string; alt: string }> = {
  "anxiety-treatment-maryland": { src: "/images/stock/stock-walk.jpg", alt: "A mother and son walking together on a sunny tree-lined path" },
  "depression-treatment-maryland": { src: "/images/stock/stock-window.jpg", alt: "Sunlight from a tall window across a quiet room" },
  "trauma-and-ptsd-treatment-maryland": { src: "/images/stock/stock-journal.jpg", alt: "Hands writing in a journal with a cup of coffee" },
  "adhd-evaluation-and-treatment-maryland": { src: "/images/stock/stock-talk.jpg", alt: "Two friends sitting on the grass in a park, talking" },
  "child-and-teen-mental-health-care-maryland": { src: "/images/stock/stock-family.jpg", alt: "A mother and daughter sharing a warm hug outdoors" },
  "older-adult-mental-health-care-maryland": { src: "/images/stock/stock-community.jpg", alt: "A diverse group of friends laughing together outdoors" },
};

export const conditionPages: LearnArticle[] = (raw as unknown as LearnArticle[]).map((c) => ({
  ...c,
  heroImage: HERO[c.slug]?.src,
  heroImageAlt: HERO[c.slug]?.alt,
  review: { type: "ai", date: "2026-11-09" },
}));

export function getCondition(slug: string) {
  return conditionPages.find((c) => c.slug === slug);
}
