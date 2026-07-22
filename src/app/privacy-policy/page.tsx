import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { privacyPolicySections, privacyPolicyEffectiveDate } from "@/lib/content/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Notice of Policies and Practices to Protect the Privacy of Your Health Information at King Health Systems, Inc.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Notice of Privacy Practices"
        title="Privacy Policy"
        description="How King Health Systems, Inc. protects the privacy of your health information."
      />
      <Section>
        <FadeIn className="mx-auto max-w-3xl space-y-8">
          <p className="rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
            Effective date: {privacyPolicyEffectiveDate}. This date is carried
            over from the organization&apos;s original notice and should be
            confirmed or updated by King Health Systems&apos; compliance
            staff.
          </p>
          {privacyPolicySections.map((section, i) => (
            <div key={section.heading}>
              <h2 className="font-heading text-lg font-semibold">
                {i + 1}. {section.heading}
              </h2>
              <p className="mt-2 leading-relaxed text-foreground/90">{section.body}</p>
            </div>
          ))}
        </FadeIn>
      </Section>
    </>
  );
}
