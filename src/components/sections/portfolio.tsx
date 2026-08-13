"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { PortfolioLightbox } from "@/components/sections/portfolio-lightbox";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/content/work";
import { EASE } from "@/lib/motion";

/** How many pieces are visible before the visitor asks for the rest. */
const FEATURED_COUNT = 6;

/**
 * Work shown as a grid of real screenshots rather than a carousel.
 *
 * Every card renders the top of a full-length page capture, so the work is
 * legible at a glance with no interaction required. Clicking a card opens the
 * complete capture; the remaining pieces are one button away.
 */
export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const featured = projects.slice(0, FEATURED_COUNT);
  const remaining = projects.slice(FEATURED_COUNT);

  return (
    <section id="work" className="relative border-t border-white/6 px-6 py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.16),transparent_65%)] blur-[60px]"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeading
          index="02"
          label="FEATURED WORK"
          accent="brand"
          align="center"
          title="Work that earns its keep"
          description="Real sites and platforms we have designed and shipped. Click any project to view the full page."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.06}>
              <ProjectCard
                project={project}
                onOpen={() => setOpenIndex(index)}
              />
            </Reveal>
          ))}

          <AnimatePresence initial={false}>
            {showAll
              ? remaining.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
                  >
                    <ProjectCard
                      project={project}
                      onOpen={() => setOpenIndex(FEATURED_COUNT + index)}
                    />
                  </motion.div>
                ))
              : null}
          </AnimatePresence>
        </div>

        {remaining.length > 0 ? (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowAll((open) => !open)}
              aria-expanded={showAll}
            >
              {showAll
                ? "Show fewer projects"
                : `View all ${projects.length} projects`}
            </Button>
          </div>
        ) : null}
      </div>

      <PortfolioLightbox
        projects={projects}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900 text-left transition duration-400 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]"
    >
      {/* 4:5 window onto the top of the capture — enough to read the hero of
          each page without letting a 19,000px-tall screenshot set the height. */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/10 to-transparent" />

        <span className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-white/20 bg-ink-950/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
            <path
              d="M6 2.5H2.5V6M10 13.5h3.5V10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-[17px] font-bold tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="truncate text-[13px] text-white/55">{project.category}</p>
        </div>
        <span className="flex-none text-[12px] font-semibold text-aqua-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View
        </span>
      </div>
    </button>
  );
}
