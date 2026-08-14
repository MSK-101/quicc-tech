export type ProcessStep = {
  title: string;
  description: string;
  duration: string;
/** Supplied icon artwork under `/public/5steps`, which already includes the
   * step number, so the component does not draw its own badge. */
  image: string;
  /** What you receive at the end of the stage. */
  deliverable: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We map what you actually need, what can wait, and what it will cost. You leave with a written scope, not a sales deck.",
    duration: "2–4 days",
    image: "/5steps/1.png",
    deliverable: "Scope document & fixed milestone quote",
  },
  {
    title: "Design",
    description:
      "Wireframes first, then full UI. Every screen is reviewed with you before a line of production code is written.",
    duration: "1–2 weeks",
    image: "/5steps/2.png",
    deliverable: "Clickable prototype & design system",
  },
  {
    title: "Development",
    description:
      "Frontend, backend and integrations built in weekly increments, with a working demo at the end of each one.",
    duration: "3–10 weeks",
    image: "/5steps/3.png",
    deliverable: "Weekly demo builds & source access",
  },
  {
    title: "Testing",
    description:
      "Functional QA, device and browser coverage, performance passes and a security review before anything ships.",
    duration: "1 week",
    image: "/5steps/4.png",
    deliverable: "QA report & fixes signed off",
  },
  {
    title: "Launch",
    description:
      "Deployment, store submission, monitoring and a walkthrough so your team can run it without calling us.",
    duration: "Ongoing",
    image: "/5steps/5.png",
    deliverable: "Live product, docs & support plan",
  },
];
