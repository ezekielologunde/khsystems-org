"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Person = { name: string; credentials: string; availability?: string; photo: string };

/** Scroll-snap row of clinicians: swipe, drag the scrollbar, or use the arrow buttons. */
export function TeamScroller({ people }: { people: Person[] }) {
  const row = useRef<HTMLUListElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = row.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: reduce ? "auto" : "smooth" });
  }

  const btn =
    "flex size-12 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  return (
    <div>
      <div className="mb-5 flex justify-end gap-3">
        <button type="button" onClick={() => scrollBy(-1)} aria-label="Previous clinicians" className={btn}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" onClick={() => scrollBy(1)} aria-label="Next clinicians" className={btn}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
      <ul
        ref={row}
        tabIndex={0}
        aria-label="Clinicians, scroll sideways"
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12 motion-reduce:scroll-auto"
      >
        {people.map((p) => (
          <li key={p.name} className="w-[62%] shrink-0 snap-start sm:w-[34%] lg:w-[22%]">
            <Link href="/team" className="group block">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-[0_18px_36px_-18px_rgba(15,23,42,0.45)]">
                <Image
                  src={p.photo}
                  alt={`Portrait of ${p.name}, ${p.credentials}`}
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 34vw, 62vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </span>
              <span className="mt-3 block text-lg font-bold group-hover:underline">{p.name}</span>
              <span className="block text-sm text-foreground/75">
                {p.credentials}
                {p.availability ? ` · ${p.availability}` : ""}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
