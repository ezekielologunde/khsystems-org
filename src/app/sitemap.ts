import type { MetadataRoute } from "next";
import { services } from "@/lib/content/services";
import { publishedArticles } from "@/lib/content/learn";
import { conditionPages } from "@/lib/content/conditions";
import { screeners } from "@/lib/content/screeners";
import { allNews } from "@/lib/content/news";

const baseUrl = "https://www.khsystems.org";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/careers",
  "/resources",
  "/contact",
  "/referrals",
  "/appointments",
  "/satisfaction-survey",
  "/locations",
  "/eligibility-and-payment",
  "/community-engagement",
  "/medication-side-effects",
  "/calendar",
  "/transit-assistance",
  "/privacy-policy",
  "/faq",
  "/accessibility",
  "/testimonials",
  "/team",
  "/learn",
  "/first-visit",
  "/insurance-check",
  "/find-your-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  serviceRoutes.push("/services/psychiatric-rehabilitation/resources");
  serviceRoutes.push("/learn/check-in", ...screeners.map((s) => `/learn/check-in/${s.slug}`));
  serviceRoutes.push("/learn/news", ...allNews.map((n) => `/learn/news/${n.slug}`));
  serviceRoutes.push("/conditions", ...conditionPages.map((c) => `/conditions/${c.slug}`));
  for (const a of publishedArticles) serviceRoutes.push(`/learn/${a.slug}`);

  // Content here is static/hand-authored (no CMS timestamps to draw on),
  // so a fixed build-time date is the honest freshness signal - it beats
  // the previous new Date(0) (literally Jan 1 1970), which told crawlers
  // every page was 55+ years stale and gave them no reason to re-check any
  // of it.
  const lastModified = new Date();

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
