import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "King Health Systems, Inc.'s commitment to making our website accessible to all visitors.",
};

const commitments = [
  "Semantic HTML structure with a logical heading hierarchy on every page",
  "Keyboard navigation support, including a 'skip to main content' link",
  "Visible focus indicators on all interactive elements",
  "Descriptive alt text on meaningful images",
  "Labeled form fields with inline error messages for screen readers",
  "Motion that respects your device's reduced-motion setting",
  "Sufficient color contrast between text and background",
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Commitment"
        title="Accessibility Statement"
        description="We want every visitor to be able to use this website, regardless of ability."
      />
      <Section>
        <FadeIn className="mx-auto max-w-3xl space-y-8">
          <p className="leading-relaxed text-foreground/90">
            King Health Systems, Inc. is committed to ensuring digital
            accessibility for people of all abilities. We continually work to
            improve the user experience for everyone and apply relevant
            accessibility standards as we build and update this site.
          </p>

          <div>
            <h2 className="font-heading text-lg font-semibold">
              What we&apos;ve built in
            </h2>
            <ul className="mt-4 space-y-2">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold">
              Let us know if something isn&apos;t working
            </h2>
            <p className="mt-2 leading-relaxed text-foreground/90">
              Accessibility is an ongoing effort. If you encounter a barrier
              using this website, please contact us at{" "}
              <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                {company.email}
              </a>{" "}
              or call {company.phone} so we can address it.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
