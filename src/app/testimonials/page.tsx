import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { testimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "What clients say about King Health Systems, Inc.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="In Their Words"
        title="Client Testimonials"
        description="We're grateful for the trust our clients place in us. Here's what they've shared."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {testimonials.map((testimonial) => (
            <FadeIn key={testimonial.author}>
              <blockquote className="rounded-xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
                <p className="font-heading text-2xl italic leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-muted-foreground">
                  &mdash; {testimonial.author}
                </footer>
              </blockquote>
            </FadeIn>
          ))}

          <FadeIn delay={0.1} className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Have you worked with King Health Systems? We&apos;d love to hear
              about your experience.
            </p>
            <Button
              render={<Link href="/satisfaction-survey" />}
              variant="outline"
              className="mt-4"
            >
              Share Your Feedback
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
