"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play, Square } from "lucide-react";

const PHASES = [
  { label: "Breathe in", scale: 1, seconds: 4 },
  { label: "Hold", scale: 1, seconds: 4 },
  { label: "Breathe out", scale: 0.55, seconds: 4 },
  { label: "Hold", scale: 0.55, seconds: 4 },
] as const;
const ROUNDS = 4; // 4 rounds x 16 seconds, about one minute

/** A one-minute slow-breathing pause: in 4, hold 4, out 4, hold 4. Nothing is stored. */
export function Breathing() {
  const reduce = useReducedMotion();
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0); // counts phases from 0
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = setTimeout(() => {
      if (step + 1 >= ROUNDS * PHASES.length) {
        setRunning(false);
        setDone(true);
        setStep(0);
      } else {
        setStep(step + 1);
      }
    }, PHASES[step % PHASES.length].seconds * 1000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [running, step]);

  const phase = PHASES[step % PHASES.length];
  const scale = running ? phase.scale : 0.55;

  function start() {
    setDone(false);
    setStep(0);
    setRunning(true);
  }
  function stop() {
    setRunning(false);
    setStep(0);
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div>
        <h2 className="font-heading text-4xl font-semibold leading-tight text-balance text-white sm:text-5xl">
          Take one minute to breathe
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90">
          Slow breathing is a simple pause you can use anywhere. Breathe in for four, hold for four,
          breathe out for four, hold for four. It is not treatment or medical advice.
        </p>
        <button
          type="button"
          onClick={running ? stop : start}
          className="mt-7 inline-flex min-h-14 items-center gap-3 rounded-full bg-accent-yellow px-8 text-lg font-bold text-accent-yellow-foreground shadow-[0_12px_28px_-10px_rgba(0,0,0,0.5)] hover:bg-accent-yellow/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {running ? <Square className="size-5" aria-hidden /> : <Play className="size-5" aria-hidden />}
          {running ? "Stop" : done ? "Go again" : "Start breathing"}
        </button>
        <p className="sr-only" role="status">
          {running ? "Breathing exercise started. Follow the circle and the words on screen." : done ? "Breathing exercise finished." : ""}
        </p>
      </div>

      <div className="mx-auto w-full max-w-[22rem]">
        <div className="relative aspect-square w-full">
          <div aria-hidden className="absolute inset-0 rounded-full border-2 border-dashed border-white/40" />
          <motion.div
            aria-hidden
            animate={{ scale: reduce ? 0.8 : scale }}
            transition={{ duration: running ? phase.seconds : 0.6, ease: "easeInOut" }}
            className="absolute inset-[6%] rounded-full bg-accent-blue shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
          />
          {running ? (
            <p aria-hidden className="absolute inset-0 flex items-center justify-center text-2xl font-bold tabular-nums text-accent-blue-foreground">
              {Math.floor(step / PHASES.length) + 1} of {ROUNDS}
            </p>
          ) : null}
        </div>
        <p aria-hidden className="mt-6 text-center font-heading text-3xl font-semibold text-white sm:text-4xl">
          {running ? phase.label : done ? "Nice work" : "Ready when you are"}
        </p>
      </div>
    </div>
  );
}
