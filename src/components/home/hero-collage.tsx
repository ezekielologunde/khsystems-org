"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { MapPin, Video } from "lucide-react";

/**
 * Three real photographs that drift at different speeds as the page scrolls,
 * with two floating facts. Static under reduced motion.
 */
export function HeroCollage() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const ySmallA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const ySmallB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const bob = reduce ? {} : { y: [0, -8, 0] };

  return (
    <div ref={ref} className="relative mx-auto aspect-[5/5] w-full max-w-[34rem] lg:max-w-none">
      {/* Sun */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="absolute right-[2%] top-[2%] size-[46%] rounded-full bg-accent-yellow"
      />

      <motion.div
        style={{ y: yBig }}
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0 round 2rem)" }}
        animate={{ clipPath: "inset(0 0 0% 0 round 2rem)" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        className="absolute right-0 top-[10%] h-[70%] w-[68%] overflow-hidden rounded-[2rem] shadow-[0_24px_48px_-16px_rgba(15,23,42,0.35)]"
      >
        <Image
          src="/images/hero-family.jpg"
          alt="A family sitting together outdoors, supporting one another"
          fill
          priority
          sizes="(min-width:1024px) 34vw, 70vw"
          className="object-cover object-[50%_70%]"
        />
      </motion.div>

      <motion.div
        style={{ y: ySmallA }}
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0 round 1.5rem)", rotate: -6 }}
        animate={{ clipPath: "inset(0 0 0% 0 round 1.5rem)", rotate: -4 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="absolute left-0 top-[30%] h-[36%] w-[44%] overflow-hidden rounded-3xl border-4 border-background shadow-[0_18px_36px_-14px_rgba(15,23,42,0.4)]"
      >
        <Image
          src="/images/stock/stock-community.jpg"
          alt="Friends laughing together outdoors"
          fill
          sizes="(min-width:1024px) 16vw, 40vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: ySmallB }}
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0 round 1.5rem)", rotate: 6 }}
        animate={{ clipPath: "inset(0 0 0% 0 round 1.5rem)", rotate: 3 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="absolute bottom-0 right-[8%] h-[32%] w-[40%] overflow-hidden rounded-3xl border-4 border-background shadow-[0_18px_36px_-14px_rgba(15,23,42,0.4)]"
      >
        <Image
          src="/images/stock/stock-walk.jpg"
          alt="A parent and child walking together on a sunny path"
          fill
          sizes="(min-width:1024px) 14vw, 40vw"
          className="object-cover"
        />
      </motion.div>

      <motion.p
        animate={bob}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[2%] top-[8%] flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-[0_10px_24px_-8px_rgba(15,23,42,0.3)]"
      >
        <MapPin className="size-4 text-primary" aria-hidden />
        Baltimore · Laurel · Cockeysville
      </motion.p>
      <motion.p
        animate={bob}
        transition={{ duration: 4.6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[4%] flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-[0_10px_24px_-8px_rgba(29,78,216,0.5)]"
      >
        <Video className="size-4" aria-hidden />
        In office, at home, or telehealth
      </motion.p>
    </div>
  );
}
