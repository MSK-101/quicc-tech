"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar across the very top showing reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-linear-to-r from-brand-700 via-brand-500 to-aqua-400 shadow-[0_0_12px_rgba(37,99,235,0.8)]"
    />
  );
}
