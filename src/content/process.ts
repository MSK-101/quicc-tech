import type { ServiceIconName } from "@/components/icons/service-icons";

export type ProcessStep = {
  title: string;
  description: string;
  duration: string;
  icon: ServiceIconName;
  /** What you receive at the end of the stage. */
  deliverable: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We map what you actually need, what can wait, and what it will cost. You leave with a written scope, not a sales deck.",
    duration: "2–4 days",
    icon: "search",
    deliverable: "Scope document & fixed milestone quote",
  },
  {
    title: "Design",
    description:
      "Wireframes first, then full UI. Every screen is reviewed with you before a line of production code is written.",
    duration: "1–2 weeks",
    icon: "pen",
    deliverable: "Clickable prototype & design system",
  },
  {
    title: "Development",
    description:
      "Frontend, backend and integrations built in weekly increments, with a working demo at the end of each one.",
    duration: "3–10 weeks",
    icon: "build",
    deliverable: "Weekly demo builds & source access",
  },
  {
    title: "Testing",
    description:
      "Functional QA, device and browser coverage, performance passes and a security review before anything ships.",
    duration: "1 week",
    icon: "shield",
    deliverable: "QA report & fixes signed off",
  },
  {
    title: "Launch",
    description:
      "Deployment, store submission, monitoring and a walkthrough so your team can run it without calling us.",
    duration: "Ongoing",
    icon: "rocket",
    deliverable: "Live product, docs & support plan",
  },
];
