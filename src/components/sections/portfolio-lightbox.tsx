"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import type { Project } from "@/content/work";
import { EASE } from "@/lib/motion";

type PortfolioLightboxProps = {
  projects: Project[];
  /** Index of the open project, or null when closed. */
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Full-length viewer for a single project.
 *
 * Page captures are extremely tall, so the image is rendered at full width
 * inside a scrollable panel rather than being squeezed to fit the viewport —
 * the point is to read the whole page, not to see a thumbnail of it.
 */
export function PortfolioLightbox({
  projects,
  openIndex,
  onClose,
  onNavigate,
}: PortfolioLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Index and project are derived together so both narrow to non-null at once.
  const current =
    openIndex === null
      ? null
      : { index: openIndex, project: projects[openIndex] };
  const isOpen = current !== null;

  const goTo = useCallback(
    (delta: number) => {
      if (openIndex === null) return;
      const next = (openIndex + delta + projects.length) % projects.length;
      onNavigate(next);
    },
    [openIndex, projects.length, onNavigate],
  );

  // Keyboard control, and freeze the page behind the dialog while it is open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo(1);
      if (event.key === "ArrowLeft") goTo(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, goTo]);

  // Each new project starts at the top of its own capture.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [openIndex]);

  return (
    <AnimatePresence>
      {current ? (
        <motion.div
          // AnimatePresence tracks its children by key.
          key="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.project.title} — full preview`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="fixed inset-0 z-[90] flex flex-col bg-ink-950/92 backdrop-blur-md"
          onClick={onClose}
        >
          <header className="flex flex-none items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8">
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold tracking-tight">
                {current.project.title}
              </p>
              <p className="truncate text-[12.5px] text-white/50">
                {current.project.category} · {current.index + 1} of {projects.length}
              </p>
            </div>

            <div className="flex flex-none items-center gap-2">
              <NavButton
                label="Previous project"
                onClick={(event) => {
                  event.stopPropagation();
                  goTo(-1);
                }}
              >
                <path d="M13 8H3M7 4L3 8l4 4" />
              </NavButton>
              <NavButton
                label="Next project"
                onClick={(event) => {
                  event.stopPropagation();
                  goTo(1);
                }}
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </NavButton>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="grid size-10 place-items-center rounded-lg border border-white/14 bg-white/5 transition-colors hover:border-white/30 hover:bg-white/12"
              >
                <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="no-scrollbar flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-white/12 bg-ink-900"
              // Clicks inside the image must not fall through to the backdrop.
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={current.project.image}
                alt={`${current.project.title} — ${current.project.category}`}
                width={current.project.width}
                height={current.project.height}
                sizes="(max-width: 896px) 100vw, 896px"
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function NavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-10 place-items-center rounded-lg border border-white/14 bg-white/5 transition-colors hover:border-white/30 hover:bg-white/12"
    >
      <svg
        viewBox="0 0 16 16"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}
