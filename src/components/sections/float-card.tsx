"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function FloatCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border bg-card/95 shadow-lg backdrop-blur-sm",
        className
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -8, 0] }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.5, delay }
          : {
              opacity: { duration: 0.5, delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            }
      }
    >
      {children}
    </motion.div>
  );
}
