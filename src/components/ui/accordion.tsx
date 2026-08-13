"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState, type ReactNode } from "react";

import { EASE } from "@/lib/motion";

/**
 * Header and body are render functions rather than elements.
 *
 * Callers build their entries with `.map()`, and React's dev-mode key check
 * flags any JSX created inside a `.map()` callback that has no key — even when
 * the element is stashed on an object instead of returned as an array. Deferring
 * creation to Accordion's own render sidesteps that entirely, and callers never
 * have to remember a key that serves no purpose.
 */
export type AccordionEntry = {
  id: string;
  /** Rendered inside the trigger, to the left of the toggle icon. */
  header: () => ReactNode;
  /** Rendered in the panel that expands below the trigger. */
  body: () => ReactNode;
};

type AccordionProps = {
  items: AccordionEntry[];
  /** Index open on first render. Pass -1 to start fully collapsed. */
  defaultOpenIndex?: number;
  className?: string;
};

/**
 * A single-open accordion, shared by the reasons, tech stack and FAQ sections
 * so all three behave and animate identically.
 *
 * Opening one row closes the others, which keeps the section short enough to
 * scan — the reason these sections were converted from long lists in the first
 * place.
 */
export function Accordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border transition-colors duration-350 ${
              isOpen
                ? "border-brand-600/40 bg-brand-600/7"
                : "border-white/8 bg-white/2 hover:border-white/16"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                {item.header()}
                <ToggleIcon isOpen={isOpen} />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  // AnimatePresence tracks its children by key.
                  key={panelId}
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">{item.body()}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Plus that folds into a minus when its row opens. */
function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={`grid size-8 flex-none place-items-center rounded-full border transition-colors duration-300 ${
        isOpen
          ? "border-aqua-400/50 bg-aqua-400/15 text-aqua-300"
          : "border-white/14 bg-white/5 text-white/75"
      }`}
    >
      <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
        <path
          d="M2.5 8h11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <motion.path
          d="M8 2.5v11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </svg>
    </span>
  );
}
