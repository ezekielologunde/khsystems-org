import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { InsuranceChecker } from "@/components/tools/insurance-checker";

export const metadata: Metadata = {
  alternates: { canonical: "/insurance-check" },
  title: "Do You Take My Insurance? Maryland Medicaid Plan Check",
  description:
    "Check whether King Health Systems accepts your Maryland Medicaid plan. We accept Maryland Medicaid only, with no PCP referral required.",
};

export default function InsuranceCheckPage() {
  return (
    <>
      <PageHero
        image="/images/stock/stock-family.jpg"
        imageAlt="A mother and daughter sharing a warm hug outdoors"
        title="Do you take my insurance?"
        description="We accept Maryland Medicaid only. Pick your plan to see if we take it."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <InsuranceChecker />
        </div>
      </Section>
    </>
  );
}
