import type { LearnArticle } from "@/lib/content/learn";

/** Photos (all in /public/images/stock, see CREDITS.md) with honest alt text. */
const PHOTOS = {
  community: { src: "/images/stock/stock-community.jpg", alt: "A diverse group of friends laughing together outdoors" },
  family: { src: "/images/stock/stock-family.jpg", alt: "A mother and daughter sharing a warm hug outdoors" },
  journal: { src: "/images/stock/stock-journal.jpg", alt: "Hands writing in a journal with a cup of coffee" },
  street: { src: "/images/stock/stock-street.jpg", alt: "A tree-lined city sidewalk with brick buildings in warm evening light" },
  talk: { src: "/images/stock/stock-talk.jpg", alt: "Two friends sitting on the grass in a park, talking" },
  video: { src: "/images/stock/stock-video.jpg", alt: "A laptop on a glass table showing a video call with a person" },
  walk: { src: "/images/stock/stock-walk.jpg", alt: "A mother and son walking together on a sunny tree-lined path" },
  window: { src: "/images/stock/stock-window.jpg", alt: "Sunlight from a tall window across a quiet room" },
} as const;

type Photo = { src: string; alt: string };

const BY_SLUG: Record<string, keyof typeof PHOTOS> = {
  "whats-new-in-outpatient-therapy-and-care": "street",
  "children-and-teen-mental-health-trends": "family",
  "loneliness-connection-and-community": "community",
  "recovery-rehabilitation-and-peer-support": "talk",
  "getting-care-with-maryland-medicaid": "journal",
  "how-psychiatric-rehabilitation-prp-works-in-maryland": "walk",
  "video-or-in-person-therapy-how-to-choose": "video",
  "signs-a-teen-may-need-mental-health-support": "talk",
  "sleep-and-mental-health": "window",
  "grief-vs-prolonged-grief-when-to-get-help": "journal",
};

const FALLBACK = Object.values(PHOTOS);

/** Photo for an article: its own heroImage, then the slug map, then a stable fallback. */
export function articlePhoto(a: Pick<LearnArticle, "slug" | "heroImage" | "heroImageAlt">): Photo {
  if (a.heroImage) return { src: a.heroImage, alt: a.heroImageAlt ?? "" };
  const mapped = BY_SLUG[a.slug];
  if (mapped) return PHOTOS[mapped];
  let h = 0;
  for (const c of a.slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return FALLBACK[h % FALLBACK.length];
}

/** Short deck for a story: the first sentence or two of the short answer. */
export function deck(text: string, max = 190) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
  return stop > 80 ? cut.slice(0, stop + 1) : cut.replace(/\s+\S*$/, "") + "…";
}
