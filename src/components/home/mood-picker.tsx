"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/content/company";

type Pick = { title: string; href: string };
type Mood = { id: string; label: string; intro: string; picks: Pick[] };

const MOODS: Mood[] = [
  {
    id: "anxious",
    label: "Anxious or on edge",
    intro: "Worry that will not switch off is common, and it is treatable.",
    picks: [
      { title: "Anxiety care in Maryland", href: "/conditions/anxiety-treatment-maryland" },
      { title: "Individual therapy", href: "/services/individual-therapy" },
      { title: "Take the private GAD-7 check-in", href: "/learn/check-in" },
    ],
  },
  {
    id: "low",
    label: "Down or low",
    intro: "Feeling flat or heavy for weeks is worth talking about with someone.",
    picks: [
      { title: "Depression care in Maryland", href: "/conditions/depression-treatment-maryland" },
      { title: "Individual therapy", href: "/services/individual-therapy" },
      { title: "Take the private PHQ-9 check-in", href: "/learn/check-in" },
    ],
  },
  {
    id: "hard",
    label: "Shaken by something hard",
    intro: "After a frightening or painful event, support can help you feel steadier.",
    picks: [
      { title: "Trauma and PTSD care", href: "/conditions/trauma-and-ptsd-treatment-maryland" },
      { title: "Individual therapy", href: "/services/individual-therapy" },
    ],
  },
  {
    id: "child",
    label: "Worried about my child or teen",
    intro: "You know them best. We work with children, teens and their families.",
    picks: [
      { title: "Child and teen care", href: "/conditions/child-and-teen-mental-health-care-maryland" },
      { title: "Family therapy", href: "/services/family-therapy" },
      { title: "Signs a teen may need support", href: "/learn/signs-a-teen-may-need-mental-health-support" },
    ],
  },
  {
    id: "focus",
    label: "Struggling to focus",
    intro: "Trouble with focus can have many causes. An evaluation can sort them out.",
    picks: [
      { title: "ADHD evaluation and treatment", href: "/conditions/adhd-evaluation-and-treatment-maryland" },
      { title: "Psychiatric evaluation", href: "/services/psychiatric-evaluation" },
    ],
  },
  {
    id: "daily",
    label: "Stuck with daily life",
    intro: "Skills and steady support for day-to-day life and goals.",
    picks: [{ title: "Psychiatric rehabilitation (PRP)", href: "/services/psychiatric-rehabilitation" }],
  },
  {
    id: "older",
    label: "Caring for an older loved one",
    intro: "Later-life changes can affect mood and memory. Care can be part of the plan.",
    picks: [{ title: "Older adult care", href: "/conditions/older-adult-mental-health-care-maryland" }],
  },
  {
    id: "unsure",
    label: "Not sure yet",
    intro: "That is a fine place to start. Two quick questions can point the way.",
    picks: [
      { title: "Which service fits me?", href: "/find-your-service" },
      { title: "What to expect at your first visit", href: "/first-visit" },
    ],
  },
];

/** Nothing here is stored or sent. It only chooses which links to show. */
export function MoodPicker() {
  const reduce = useReducedMotion();
  const [id, setId] = useState<string | null>(null);
  const mood = MOODS.find((m) => m.id === id);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <div>
        <h2 id="mood-heading" className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
          How are you feeling today?
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground/80">
          Pick what fits best. We will point you to the right page. This is not a diagnosis, and
          nothing you pick is saved.
        </p>
      </div>

      <div>
        <div role="group" aria-labelledby="mood-heading" className="flex flex-wrap gap-3">
          {MOODS.map((m, i) => (
            <motion.button
              key={m.id}
              type="button"
              aria-pressed={id === m.id}
              onClick={() => setId(m.id)}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              whileHover={reduce ? undefined : { y: -3, rotate: i % 2 ? 1 : -1 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              className={`min-h-12 rounded-full border-2 px-5 text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                id === m.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/15 bg-card text-foreground hover:border-primary"
              }`}
            >
              {m.label}
            </motion.button>
          ))}
        </div>

        <div aria-live="polite" className="mt-6 min-h-[2rem]">
          <AnimatePresence mode="wait">
            {mood ? (
              <motion.div
                key={mood.id}
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="rounded-3xl bg-secondary p-6 text-secondary-foreground shadow-[0_24px_48px_-20px_rgba(11,18,32,0.5)] sm:p-8"
              >
                <p className="font-heading text-2xl font-semibold leading-snug text-white">{mood.intro}</p>
                <ul className="mt-5 space-y-1">
                  {mood.picks.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="group flex min-h-12 items-center justify-between gap-3 border-b border-white/15 py-2 text-lg font-semibold hover:text-accent-yellow"
                      >
                        {p.title}
                        <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    render={<Link href="/appointments" />}
                    className="min-h-12 bg-accent-yellow font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
                  >
                    Request an appointment
                  </Button>
                  <Button
                    render={<a href={company.phoneHref} />}
                    variant="outline"
                    className="min-h-12 border-white/50 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                  >
                    <Phone className="size-4" aria-hidden />
                    {company.phone}
                  </Button>
                </div>
                <p className="mt-5 text-sm text-secondary-foreground/80">
                  In crisis? Call or text <strong className="text-white">988</strong>. In an emergency, call{" "}
                  <strong className="text-white">911</strong>.
                </p>
              </motion.div>
            ) : (
              <motion.p key="hint" className="text-base text-muted-foreground">
                Choose one above to see where to go next.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
