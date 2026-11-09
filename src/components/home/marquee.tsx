"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * Slow scrolling ribbon of what we offer. Moves with CSS only, stops on hover or
 * keyboard focus, has a pause button (WCAG 2.2.2) and is static under reduced motion.
 * The list is repeated once for the seamless loop; the copy is hidden from screen readers.
 */
export function Marquee({ items }: { items: string[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative border-y-2 border-secondary bg-accent-yellow text-accent-yellow-foreground">
      <div className="flex items-center">
        <div className="marquee-viewport group min-w-0 flex-1 overflow-hidden" data-paused={paused}>
          <ul className="marquee-track flex w-max items-center gap-10 py-4 pl-10 text-lg font-bold">
            {[0, 1].map((copy) =>
              items.map((it) => (
                <li
                  key={`${copy}-${it}`}
                  aria-hidden={copy === 1}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  {it}
                  <span aria-hidden className="size-2 rounded-full bg-secondary" />
                </li>
              ))
            )}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play the scrolling list of services" : "Pause the scrolling list of services"}
          className="m-2 flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-secondary bg-accent-yellow hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:hidden"
        >
          {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
        </button>
      </div>
    </div>
  );
}
