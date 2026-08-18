export type Reason = {
  title: string;
  detail: string;
  /** Hex colour for the number and hexagon, graded down the list. */
  accent: string;
};

/** The ten reasons shown in the "Why Quicc" section, in display order. */
export const reasons: Reason[] = [
  {
    title: "Experienced development team",
    detail:
      "Senior engineers only. Nobody is learning your product on your budget.",
    accent: "#22D3EE",
  },
  {
    title: "Modern technology stack",
    detail:
      "Well-supported tools with long release horizons, not whatever trended last month.",
    accent: "#4F8BFF",
  },
  {
    title: "Responsive UI/UX",
    detail:
      "Designed on mobile first, then scaled up — because that is where your traffic is.",
    accent: "#7C6BFF",
  },
  {
    title: "Secure development",
    detail:
      "Auth, access control and dependency audits handled as standard, not as an add-on.",
    accent: "#A855F7",
  },
  {
    title: "Source code ownership",
    detail:
      "The repository, designs and infrastructure accounts are yours from day one.",
    accent: "#C846E8",
  },
  {
    title: "Transparent communication",
    detail:
      "A shared board, a weekly demo, and a direct line to the people writing the code.",
    accent: "#E0459E",
  },
  {
    title: "Milestone based payments",
    detail: "You pay as each approved stage lands. No large upfront lump sum.",
    accent: "#A78BFA",
  },
  {
    title: "Long term support",
    detail:
      "Monthly plans for hosting, monitoring and updates — or one-off work with no retainer.",
    accent: "#7C3AED",
  },
  {
    title: "Scalable architecture",
    detail:
      "Built to handle your second year of growth, not just your launch week.",
    accent: "#2563EB",
  },
  {
    title: "Revisions during development",
    detail:
      "Change your mind inside an agreed stage and we adjust without a change-order fight.",
    accent: "#60A5FA",
  },
];
