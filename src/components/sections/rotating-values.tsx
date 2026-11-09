"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type ValueItem = {
  icon: ReactNode;
  iconClassName: string;
  text: string;
};

/**
 * Auto-rotating reassurance cards. Accessible by design (WCAG 2.2.2):
 * a visible pause/play button, no rotation for people who prefer reduced
 * motion, each card reachable by its own button, and hidden cards are
 * removed from the accessibility tree.
 */
export function RotatingValues({ items }: { items: ValueItem[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length, paused]);

  return (
    <div
      className="flex h-full flex-col justify-between"
      role="group"
      aria-roledescription="carousel"
      aria-label="Why families choose us"
    >
      <div className="relative min-h-[4.5rem]" aria-live={paused ? "polite" : "off"}>
        {items.map((item, i) => (
          <div
            key={item.text}
            aria-hidden={i !== active}
            className={cn(
              "flex items-center gap-4 transition-all duration-500",
              i === active
                ? "relative opacity-100 translate-y-0"
                : "pointer-events-none absolute inset-0 opacity-0 translate-y-4"
            )}
          >
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full text-white sm:size-12",
                item.iconClassName
              )}
            >
              {item.icon}
            </span>
            <p className="text-sm leading-tight text-foreground/80 sm:text-base lg:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play rotation" : "Pause rotation"}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
        </button>
        <div className="flex flex-1 gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.text}
              type="button"
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              aria-label={`Show message ${i + 1} of ${items.length}`}
              aria-current={i === active}
              className="group flex h-11 flex-1 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span
                className={cn(
                  "h-0.5 w-full rounded-full transition-colors duration-300",
                  i === active ? "bg-foreground" : "bg-foreground/20 group-hover:bg-foreground/40"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
