export type Reason = {
  title: string;
  detail: string;
};

/** The ten reasons shown in the "Why Quicc" section, in display order. */
export const reasons: Reason[] = [
  {
    title: "Experienced development team",
    detail:
      "Senior engineers only. Nobody is learning your product on your budget.",
  },
  {
    title: "Modern technology stack",
    detail:
      "Well-supported tools with long release horizons, not whatever trended last month.",
  },
  {
    title: "Responsive UI/UX",
    detail:
      "Designed on mobile first, then scaled up — because that is where your traffic is.",
  },
  {
    title: "Secure development",
    detail:
      "Auth, access control and dependency audits handled as standard, not as an add-on.",
  },
  {
    title: "Source code ownership",
    detail:
      "The repository, designs and infrastructure accounts are yours from day one.",
  },
  {
    title: "Transparent communication",
    detail:
      "A shared board, a weekly demo, and a direct line to the people writing the code.",
  },
  {
    title: "Milestone based payments",
    detail: "You pay as each approved stage lands. No large upfront lump sum.",
  },
  {
    title: "Long term support",
    detail:
      "Monthly plans for hosting, monitoring and updates — or one-off work with no retainer.",
  },
  {
    title: "Scalable architecture",
    detail:
      "Built to handle your second year of growth, not just your launch week.",
  },
  {
    title: "Revisions during development",
    detail:
      "Change your mind inside an agreed stage and we adjust without a change-order fight.",
  },
];
