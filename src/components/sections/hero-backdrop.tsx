"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Ambient background for the hero: a masked grid plus three drifting blue
 * blooms that move at different rates as the page scrolls.
 */
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const slowDrift = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fastDrift = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_30%,transparent_75%)]" />

      <motion.div
        style={prefersReducedMotion ? undefined : { y: slowDrift }}
        className="absolute -top-44 left-[6%] size-[620px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.32),transparent_62%)] blur-[40px]"
      />
      <motion.div
        style={prefersReducedMotion ? undefined : { y: fastDrift }}
        className="absolute -top-16 right-[2%] size-[560px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.30),transparent_62%)] blur-[50px] [animation-direction:reverse]"
      />
      <motion.div
        style={prefersReducedMotion ? undefined : { y: slowDrift }}
        className="absolute top-[420px] left-[38%] h-[420px] w-[520px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] blur-[60px]"
      />
    </div>
  );
}
