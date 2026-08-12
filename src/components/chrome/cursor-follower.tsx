"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/lib/use-media-query";

/** Elements that make the ring expand into its "interactive" state. */
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

/**
 * Replaces the default pointer with a two-part cursor: a dot that tracks the
 * mouse exactly, and a ring that trails behind it and swells over anything
 * clickable.
 *
 * Only mounts for fine pointers (mouse / trackpad) and when the visitor has not
 * asked for reduced motion; touch devices and reduced-motion users keep the
 * native cursor.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isEnabled = hasFinePointer && !prefersReducedMotion;

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!isEnabled || !dot || !ring) return;

    // The dot snaps to the pointer; the ring eases toward it a beat later.
    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const moveRingX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    let hasMoved = false;

    const handleMove = (event: PointerEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 });
      }
      moveDotX(event.clientX);
      moveDotY(event.clientY);
      moveRingX(event.clientX);
      moveRingY(event.clientY);
    };

    const setInteractive = (isInteractive: boolean) => {
      gsap.to(ring, {
        scale: isInteractive ? 1.75 : 1,
        borderColor: isInteractive
          ? "rgba(34,211,238,0.9)"
          : "rgba(255,255,255,0.35)",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dot, {
        scale: isInteractive ? 0.4 : 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setInteractive(Boolean(target?.closest?.(INTERACTIVE_SELECTOR)));
    };

    const handleLeaveWindow = () => {
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.2 });
      hasMoved = false;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    document.addEventListener("pointerleave", handleLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerleave", handleLeaveWindow);
      gsap.killTweensOf([dot, ring]);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ringRef}
        className="invisible absolute -top-4 -left-4 size-8 rounded-full border border-white/35 opacity-0 mix-blend-difference"
      />
      <div
        ref={dotRef}
        className="invisible absolute -top-[3px] -left-[3px] size-1.5 rounded-full bg-aqua-400 opacity-0"
      />
    </div>
  );
}
