import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/learn/article-view";
import { conditionPages, getCondition } from "@/lib/content/conditions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return conditionPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) return {};
  return {
    alternates: { canonical: `/conditions/${c.slug}` },
    title: c.title,
    description: c.description,
    openGraph: { type: "article", title: c.title, description: c.description },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) notFound();
  return <ArticleView a={c} basePath="/conditions" />;
}
