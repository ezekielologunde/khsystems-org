"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ValueItem = {
  icon: ReactNode;
  iconClassName: string;
  text: string;
};

export function RotatingValues({ items }: { items: ValueItem[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="relative min-h-[4.5rem]">
        {items.map((item, i) => (
          <div
            key={item.text}
            className={cn(
              "flex items-center gap-4 transition-all duration-500",
              i === active
                ? "relative opacity-100 translate-y-0"
                : "absolute inset-0 opacity-0 translate-y-4"
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
      <div className="mt-6 flex gap-1.5">
        {items.map((item, i) => (
          <span
            key={item.text}
            className={cn(
              "h-0.5 flex-1 rounded-full transition-colors duration-300",
              i === active ? "bg-foreground" : "bg-foreground/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
