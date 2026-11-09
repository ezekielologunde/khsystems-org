import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { IntroVideo } from "@/components/sections/intro-video";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  alternates: { canonical: "/first-visit" },
  title: "Your First Visit: What to Expect",
  description:
    "What happens when you start care at King Health Systems: how to reach us, your assessment, your Individualized Treatment Plan, and in-person or telehealth visits.",
};

const STEPS = [
  {
    t: "You reach out",
    d: `Call ${company.phone}, request an appointment online, or have a provider send a referral. No referral from a primary care doctor is required. We confirm your Maryland Medicaid coverage with you.`,
  },
  {
    t: "Your assessment",
    d: "A licensed clinician talks with you about what is going on, your history, and what you want from care. You can ask questions at any time.",
  },
  {
    t: "Your treatment plan",
    d: "Together you build an Individualized Treatment Plan with goals that matter to you. It is reviewed as things change.",
  },
  {
    t: "Your visits",
    d: "Meet at one of our offices, from home by telehealth, or at home for eligible clients, Monday through Friday.",
  },
];

const BRING = [
  "Your Maryland Medicaid card (or your member ID)",
  "A photo ID, if you have one",
  "A list of medicines you take now, if any",
  "Names of other doctors or therapists you see, if you want us to coordinate",
  "Questions or goals you want to talk about",
];

export default function FirstVisitPage() {
  return (
    <>
      <PageHero
        image="/images/stock/stock-window.jpg"
        imageAlt="Sunlight from a tall window across a quiet room"
        title="Your first visit: what to expect"
        description="Starting care can feel like a big step. Here is what happens, in plain language."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <IntroVideo
            src="/videos/khs-first-visit.mp4"
            captions="/videos/khs-first-visit.vtt"
            poster="/images/khs-first-visit-poster.jpg"
            label="Video: what to expect at your first visit"
          />
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground"
                >
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold">{s.t}</h2>
                  <p className="mt-1 text-foreground/80">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <section className="rounded-2xl border border-border bg-muted p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold">What to bring</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {BRING.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Do not worry if you are missing something. Call us and we will help.
            </p>
          </section>

          <p className="text-foreground/80">
            If you are in crisis, call or text <strong>988</strong>. In an emergency, call{" "}
            <strong>911</strong>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              render={<Link href="/appointments" />}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Request an appointment
            </Button>
            <Button render={<a href={company.phoneHref} />} size="lg" variant="outline">
              Call {company.phone}
            </Button>
            <Button render={<Link href="/insurance-check" />} size="lg" variant="outline">
              Check my insurance
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
