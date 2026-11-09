import { allNews } from "@/lib/content/news";

const base = "https://www.khsystems.org";
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = allNews
    .map(
      (n) => `<item>
<title>${esc(n.title)}</title>
<link>${base}/learn/news/${n.slug}</link>
<guid>${base}/learn/news/${n.slug}</guid>
<pubDate>${new Date(`${n.date}T12:00:00Z`).toUTCString()}</pubDate>
<description>${esc(n.summary)}</description>
</item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>King Health Systems: News &amp; Updates</title>
<link>${base}/learn/news</link>
<description>Maryland Medicaid and behavioral health updates.</description>
${items}
</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
