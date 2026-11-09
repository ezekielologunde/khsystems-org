"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

/** Cards lean toward the pointer. Mouse and pen only; static for touch and reduced motion. */
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 220, damping: 20 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 220, damping: 20 });

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType === "touch") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
