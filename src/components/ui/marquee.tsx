"use client";

import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useCallback, useEffect, useRef, type ReactNode } from "react";

type MarqueeProps = {
  /** One copy of the row. It is rendered twice to make the loop seamless. */
  children: ReactNode;
  /** `left` scrolls content leftwards, `right` scrolls it rightwards. */
  direction?: "left" | "right";
  /** Travel speed in pixels per second, so rows of different length match. */
  speed?: number;
  /** Freeze the row while the pointer is over it. */
  pauseOnHover?: boolean;
  /** Space between items, in pixels. */
  gap?: number;
  className?: string;
};

/**
 * An infinitely looping horizontal strip.
 *
 * The track holds two identical copies of `children`. Animating the track by
 * exactly -50% of its own width lands copy two where copy one started, so the
 * loop restarts with no visible seam or gap. Each copy carries a trailing pad
 * equal to `gap` so that the halves are exactly equal in width.
 *
 * The tween only runs while the strip is on screen — several of these animate
 * at once on the page, and leaving them all running off-screen wastes a
 * surprising amount of main-thread and compositor time.
 */
export function Marquee({
  children,
  direction = "left",
  speed = 60,
  pauseOnHover = true,
  gap = 40,
  className = "",
}: MarqueeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const isVisibleRef = useRef(false);
  const isHoveredRef = useRef(false);

  const prefersReducedMotion = useReducedMotion();

  /** The tween should run only when visible and not being inspected. */
  const syncPlayState = useCallback(() => {
    const tween = tweenRef.current;
    if (!tween) return;

    if (isVisibleRef.current && !isHoveredRef.current) tween.play();
    else tween.pause();
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const copy = copyRef.current;
    if (!wrapper || !track || !copy || prefersReducedMotion) return;

    const build = () => {
      tweenRef.current?.kill();

      const copyWidth = copy.getBoundingClientRect().width;
      if (copyWidth === 0) return;

      const from = direction === "left" ? 0 : -50;
      const to = direction === "left" ? -50 : 0;

      gsap.set(track, { xPercent: from });
      tweenRef.current = gsap.to(track, {
        xPercent: to,
        duration: copyWidth / speed,
        ease: "none",
        repeat: -1,
      });
      syncPlayState();
    };

    build();

    // Fonts and images settle after first paint, and the viewport can change.
    const resizeObserver = new ResizeObserver(build);
    resizeObserver.observe(copy);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        syncPlayState();
      },
      { rootMargin: "200px 0px" },
    );
    visibilityObserver.observe(wrapper);

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [direction, speed, prefersReducedMotion, syncPlayState]);

  const rowStyle = { gap: `${gap}px`, paddingInlineEnd: `${gap}px` };

  if (prefersReducedMotion) {
    return (
      <div className={`no-scrollbar overflow-x-auto ${className}`}>
        <div className="flex w-max items-center" style={rowStyle}>
          {children}
        </div>
      </div>
    );
  }

  const setHovered = (hovered: boolean) => {
    isHoveredRef.current = hovered;
    syncPlayState();
  };

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={pauseOnHover ? () => setHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setHovered(false) : undefined}
    >
      <div
        ref={trackRef}
        className="flex h-full w-max items-center will-change-transform"
      >
        <div ref={copyRef} className="flex items-center" style={rowStyle}>
          {children}
        </div>
        <div className="flex items-center" style={rowStyle} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
