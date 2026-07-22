import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { ReferralForm } from "@/components/forms/referral-form";

export const metadata: Metadata = {
  title: "Referrals",
  description:
    "Submit an OMHC or PRP referral to King Health Systems, Inc.",
};

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer a Client"
        title="Referrals"
        description="Your recommendations are welcome at King Health Systems, Inc. Please submit the information below and our intake team will follow up."
      />
      <Section>
        <FadeIn className="mx-auto max-w-2xl">
          <ReferralForm />
        </FadeIn>
      </Section>
    </>
  );
}
