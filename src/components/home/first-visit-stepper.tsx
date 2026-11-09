"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Step = { title: string; body: string; image: string; alt: string };

/** Clickable walk through a first visit. Arrow keys move between steps. */
export function FirstVisitStepper({ steps }: { steps: Step[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = steps[i];

  function onKey(e: React.KeyboardEvent, idx: number) {
    let next = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % steps.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + steps.length) % steps.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = steps.length - 1;
    else return;
    e.preventDefault();
    setI(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-stretch lg:gap-12">
      <div>
        <h2 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
          Starting is simpler than it looks
        </h2>
        <div role="tablist" aria-label="Your first visit, step by step" className="mt-8 space-y-3">
          {steps.map((st, idx) => (
            <button
              key={st.title}
              ref={(el) => {
                tabs.current[idx] = el;
              }}
              role="tab"
              id={`fv-tab-${idx}`}
              aria-selected={i === idx}
              aria-controls="fv-panel"
              tabIndex={i === idx ? 0 : -1}
              onClick={() => setI(idx)}
              onKeyDown={(e) => onKey(e, idx)}
              className={`flex min-h-14 w-full items-center gap-4 rounded-2xl border-2 px-4 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                i === idx ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <span
                aria-hidden
                className={`flex size-11 shrink-0 items-center justify-center rounded-full font-heading text-xl font-bold transition-colors ${
                  i === idx ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {idx + 1}
              </span>
              <span className="text-lg font-bold">{st.title}</span>
            </button>
          ))}
        </div>
        <Link
          href="/first-visit"
          className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-primary underline-offset-4 hover:underline"
        >
          Everything to expect, and what to bring <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      <div id="fv-panel" role="tabpanel" aria-labelledby={`fv-tab-${i}`} className="relative min-h-[26rem] overflow-hidden rounded-3xl bg-secondary text-white shadow-[0_28px_56px_-24px_rgba(11,18,32,0.55)]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={s.title}
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="relative flex-1">
              <Image src={s.image} alt={s.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="bg-secondary p-6 sm:p-8">
              <p className="font-heading text-2xl font-semibold">{s.title}</p>
              <p className="mt-2 text-lg leading-relaxed text-white/90">{s.body}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
