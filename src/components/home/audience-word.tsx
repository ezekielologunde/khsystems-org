"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";

const WORDS = ["you", "your child", "your teen", "your family"];

/**
 * Headline word that swaps through who the care is for. The full sentence is
 * available to screen readers as static text, the animation is hidden from them,
 * it pauses on request (WCAG 2.2.2) and does not run under reduced motion.
 */
export function AudienceWord() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, [reduce, paused]);

  return (
    <>
      <span className="sr-only">Mental health care for you, your child, your teen and your family</span>
      <span aria-hidden className="block">
        Mental health care for
      </span>
      <span aria-hidden className="relative mt-1 flex h-[1.18em] items-center gap-3 overflow-hidden text-primary">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={WORDS[i]}
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="inline-block whitespace-nowrap"
          >
            {WORDS[i]}.
          </motion.span>
        </AnimatePresence>
      </span>
      {reduce ? null : (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play the changing headline word" : "Pause the changing headline word"}
          className="mt-3 inline-flex size-11 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
        </button>
      )}
    </>
  );
}
