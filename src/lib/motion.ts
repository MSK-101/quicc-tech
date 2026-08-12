import type { Transition } from "framer-motion";

/** The single easing curve used across the site, so motion feels coherent. */
export const EASE = [0.2, 0.8, 0.2, 1] as const;

export const softSpring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 28,
  mass: 0.7,
};

/** Standard "rise into view" transition. */
export function riseTransition(delay = 0): Transition {
  return { duration: 0.7, delay, ease: EASE };
}
