import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceFinder } from "@/components/tools/service-finder";

export const metadata: Metadata = {
  alternates: { canonical: "/find-your-service" },
  title: "Which Service Fits Me? Find Your Starting Point",
  description:
    "Two quick questions to point you to the King Health Systems service that may fit: therapy, medication management, family therapy, or psychiatric rehabilitation.",
};

export default function FindYourServicePage() {
  return (
    <>
      <PageHero
        image="/images/stock/stock-talk.jpg"
        imageAlt="Two friends sitting on the grass in a park, talking"
        title="Which service fits me?"
        description="Two quick questions. Nothing you pick is saved or sent anywhere."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <ServiceFinder />
        </div>
      </Section>
    </>
  );
}
