"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

import { riseTransition } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before this element animates in. */
  delay?: number;
  /** Distance in pixels the element travels on its way in. */
  distance?: number;
  className?: string;
  /** Inline styles, e.g. a CSS custom property the children read from. */
  style?: CSSProperties;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Fades and lifts its children into view the first time they are scrolled to.
 * Falls back to a plain wrapper when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 22,
  className,
  style,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      // Marks the element for the no-JS fallback stylesheet in the root layout,
      // which is needed because the server-rendered markup starts at opacity 0.
      data-reveal=""
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px" }}
      transition={riseTransition(delay)}
    >
      {children}
    </MotionTag>
  );
}
