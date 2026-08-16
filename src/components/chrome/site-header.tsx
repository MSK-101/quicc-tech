"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/content/site";

/**
 * Fixed header, sitting directly under the 36px promo banner.
 *
 * Below `lg` it is the logo alone — no nav and no call to action. The page is a
 * single scrolling document, so on a phone the sections are reached by
 * scrolling and the hero's own button carries the primary action.
 */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Swap to the glassy treatment once the hero starts scrolling away.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <header
      // top offset mirrors PromoBanner's height (h-12).
      className={`fixed inset-x-0 top-12 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-350 ${
        isScrolled
          ? "border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3.5 lg:px-8">
        <a href="#top" aria-label="Quicc Tech — back to top" className="flex-none">
          <Logo className="h-11 w-auto drop-shadow-[0_2px_18px_rgba(34,211,238,0.35)]" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Visibility lives on a wrapper: the button's own `inline-flex` is a
            display utility, so a `hidden` passed through className would be
            fighting it in the cascade rather than reliably winning. */}
        <div className="hidden lg:block">
          <ButtonLink href="#contact" variant="solid" size="sm">
            Start a project
            <ArrowRight />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
