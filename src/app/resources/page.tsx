import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { resourceCategories } from "@/lib/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Crisis lines, mental health organizations, and community/social service resources curated by King Health Systems, Inc.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Resources"
        title="Resources"
        description="A curated list of crisis lines, mental health organizations, and community resources for Maryland residents."
      />
      <Section>
        <div className="space-y-14">
          {resourceCategories.map((category, i) => (
            <FadeIn key={category.key} delay={i * 0.05}>
              <h2 className="mb-5 text-2xl font-extrabold">{category.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Card key={item.name}>
                    <CardHeader>
                      <CardTitle className="text-base leading-snug">
                        {item.name}
                      </CardTitle>
                    </CardHeader>
                    {item.phone || item.phoneAlt || item.url ? (
                      <CardContent className="space-y-1 text-sm text-muted-foreground">
                        {item.phone ? <p>{item.phone}</p> : null}
                        {item.phoneAlt ? <p>{item.phoneAlt}</p> : null}
                        {item.url ? (
                          <a href={item.url} className="text-primary hover:underline">
                            {item.url.replace(/^https?:\/\//, "")}
                          </a>
                        ) : null}
                      </CardContent>
                    ) : null}
                  </Card>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
