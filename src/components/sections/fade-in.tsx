"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function FadeIn({
  children,
  delay = 0,
  className,
  y = 16,
  scale,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  scale?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : y,
        scale: shouldReduceMotion || !scale ? 1 : scale,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
