"use client";

import { useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  /** Duration of the count animation in seconds. */
  duration?: number;
  className?: string;
};

const format = (value: number, target: number) =>
  target % 1 === 0 ? Math.round(value).toString() : value.toFixed(1);

/** Counts up to `to` the first time the number scrolls into view. */
export function CountUp({
  to,
  suffix = "",
  duration = 1.4,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || !isInView) return;

    if (prefersReducedMotion) {
      element.textContent = format(to, to) + suffix;
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: to,
      duration,
      ease: "power3.out",
      onUpdate: () => {
        element.textContent = format(counter.value, to) + suffix;
      },
    });

    return () => {
      tween.kill();
    };
  }, [isInView, to, suffix, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {format(0, to)}
      {suffix}
    </span>
  );
}
