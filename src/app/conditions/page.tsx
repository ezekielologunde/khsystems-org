import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { conditionPages } from "@/lib/content/conditions";

export const metadata: Metadata = {
  alternates: { canonical: "/conditions" },
  title: "What We Treat: Conditions and Age Groups",
  description:
    "Plain-language, sourced guides to anxiety, depression, trauma, ADHD, and care for children, teens and older adults at King Health Systems in Maryland.",
};

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        image="/images/stock/stock-walk.jpg"
        imageAlt="A mother and son walking together on a sunny tree-lined path"
        title="What we treat"
        description="Plain-language guides to common concerns and the care we offer, with links to the sources."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conditionPages.map((c) => (
            <Link key={c.slug} href={`/conditions/${c.slug}`} className="block">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <p className="text-xs font-semibold text-primary">
                    {c.topic.replace("Condition: ", "")}
                  </p>
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{c.description}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          These guides are general information, not medical advice or a diagnosis. In crisis, call
          or text 988; in an emergency, call 911.
        </p>
      </Section>
    </>
  );
}
