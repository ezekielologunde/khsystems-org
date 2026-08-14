import type { MetadataRoute } from "next";

// Named explicitly (rather than left to fall under the wildcard "*" rule
// below) so each AI crawler is a deliberate "yes, index and cite us" -
// the whole point of this file is to be findable and quotable by AI
// answer engines and assistants, not just classic search.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI - training/search
  "OAI-SearchBot", // OpenAI - ChatGPT search
  "ChatGPT-User", // OpenAI - live browsing on a user's behalf
  "ClaudeBot", // Anthropic - training/search
  "Claude-User", // Anthropic - live browsing on a user's behalf
  "PerplexityBot", // Perplexity - search/answers
  "Perplexity-User",
  "Google-Extended", // Gemini grounding + training
  "Applebot-Extended", // Apple Intelligence
  "Bytespider", // ByteDance/TikTok assistants
  "CCBot", // Common Crawl - feeds many third-party AI datasets
];

// /prp is the staff-only authorization/billing tool, proxied from a
// separate login-gated app - nothing behind it resolves for an anonymous
// crawler, so keep it out of crawl budget and search/AI indexes entirely.
const DISALLOW = ["/prp"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: "https://www.khsystems.org/sitemap.xml",
  };
}
