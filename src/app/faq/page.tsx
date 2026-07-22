import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { faqCategories } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about getting started, insurance, services, and locations at King Health Systems, Inc.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Have Questions?"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often. Don't see yours? Contact us directly and we'll help."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {faqCategories.map((category, i) => (
            <FadeIn key={category.key} delay={i * 0.05}>
              <h2 className="mb-3 text-xl font-extrabold">{category.title}</h2>
              <Accordion className="divide-y divide-border">
                {category.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-left text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
