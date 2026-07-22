import type { MetadataRoute } from "next";
import { services } from "@/lib/content/services";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  serviceRoutes.push("/services/psychiatric-rehabilitation/resources");

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(0),
  }));
}
