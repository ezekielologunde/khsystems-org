import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/learn/article-view";
import { getArticle, publishedArticles } from "@/lib/content/learn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    alternates: { canonical: `/learn/${a.slug}` },
    title: a.title,
    description: a.description,
    openGraph: { type: "article", title: a.title, description: a.description },
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  return <ArticleView a={a} basePath="/learn" />;
}
