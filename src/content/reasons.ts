import type { ReasonIconName } from "@/components/icons/reason-icons";

export type Reason = {
  title: string;
  detail: string;
  icon: ReasonIconName;
  /** Hex colour for the number and hexagon, graded down the list. */
  accent: string;
};

/** The ten reasons shown in the "Why Quicc" section, in display order. */
export const reasons: Reason[] = [
  {
    title: "Experienced development team",
    detail:
      "Senior engineers only. Nobody is learning your product on your budget.",
    icon: "team",
    accent: "#22D3EE",
  },
  {
    title: "Modern technology stack",
    detail:
      "Well-supported tools with long release horizons, not whatever trended last month.",
    icon: "stack",
    accent: "#4F8BFF",
  },
  {
    title: "Responsive UI/UX",
    detail:
      "Designed on mobile first, then scaled up — because that is where your traffic is.",
    icon: "responsive",
    accent: "#7C6BFF",
  },
  {
    title: "Secure development",
    detail:
      "Auth, access control and dependency audits handled as standard, not as an add-on.",
    icon: "secure",
    accent: "#A855F7",
  },
  {
    title: "Source code ownership",
    detail:
      "The repository, designs and infrastructure accounts are yours from day one.",
    icon: "ownership",
    accent: "#C846E8",
  },
  {
    title: "Transparent communication",
    detail:
      "A shared board, a weekly demo, and a direct line to the people writing the code.",
    icon: "communication",
    accent: "#E0459E",
  },
  {
    title: "Milestone based payments",
    detail: "You pay as each approved stage lands. No large upfront lump sum.",
    icon: "milestones",
    accent: "#22D3EE",
  },
  {
    title: "Long term support",
    detail:
      "Monthly plans for hosting, monitoring and updates — or one-off work with no retainer.",
    icon: "support",
    accent: "#4F8BFF",
  },
  {
    title: "Scalable architecture",
    detail:
      "Built to handle your second year of growth, not just your launch week.",
    icon: "scalable",
    accent: "#7C6BFF",
  },
  {
    title: "Revisions during development",
    detail:
      "Change your mind inside an agreed stage and we adjust without a change-order fight.",
    icon: "revisions",
    accent: "#A855F7",
  },
];
