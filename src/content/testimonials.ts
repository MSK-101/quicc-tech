export type Testimonial = {
  name: string;
  role: string;
  /** Out of 5. Halves render as a half-filled star. */
  rating: number;
  quote: string;
  /** Initials for the avatar tile. */
  initials: string;
};

/**
 * PLACEHOLDER CONTENT — these are illustrative reviews written to show the
 * layout, not real client feedback. Replace every entry with genuine, attributed
 * testimonials (with the client's permission) before this site goes live.
 */
export const testimonialsRowOne: Testimonial[] = [
  {
    name: "Daniel Osei",
    role: "Founder, Kestrel Logistics",
    rating: 5,
    initials: "DO",
    quote:
      "The scope we agreed in week one is the scope that shipped. Weekly demos meant there were no surprises at the end, and the driver app has been running without an incident since launch.",
  },
  {
    name: "Priya Raman",
    role: "Operations Director, Bridgepoint",
    rating: 5,
    initials: "PR",
    quote:
      "They rebuilt a system three previous vendors had bolted onto. It is documented, it is tested, and our own team can extend it now without calling anyone.",
  },
  {
    name: "Marcus Bell",
    role: "Marketing Lead, Lumen Co",
    rating: 4.5,
    initials: "MB",
    quote:
      "The funnel went live in eleven days and paid for itself the first month. Reporting took a couple of rounds to get exactly right, but they stayed on it until it was.",
  },
  {
    name: "Sofia Marchetti",
    role: "CTO, Halcyon Health",
    rating: 5,
    initials: "SM",
    quote:
      "Our security review passed first time. Their engineers answered the compliance questionnaire directly instead of routing it through an account manager — that alone saved us two weeks.",
  },
  {
    name: "James Whitaker",
    role: "Owner, Ironwood Retail",
    rating: 4,
    initials: "JW",
    quote:
      "Milestone billing made a big project affordable for a small business. Timeline slipped by about a week during testing, but they flagged it early rather than letting the date quietly pass.",
  },
  {
    name: "Amara Nwosu",
    role: "Product Manager, Vantage",
    rating: 5,
    initials: "AN",
    quote:
      "Six months after launch they still answer support threads within hours. That is why we moved our second product across to them.",
  },
  {
    name: "Tom Ashworth",
    role: "Co-founder, Orbital",
    rating: 5,
    initials: "TA",
    quote:
      "We came in with a rough idea and left discovery with a written scope and a fixed number. No pressure to sign anything on the call.",
  },
];

export const testimonialsRowTwo: Testimonial[] = [
  {
    name: "Elena Kovács",
    role: "Head of Digital, Northwind",
    rating: 5,
    initials: "EK",
    quote:
      "The rebuild cut our median page load to under a second and the CMS is simple enough that marketing publishes without raising a ticket.",
  },
  {
    name: "Rohan Mehta",
    role: "Founder, Stride Fitness",
    rating: 4.5,
    initials: "RM",
    quote:
      "Both app stores approved on the first submission, which I did not expect. Onboarding copy needed a rewrite after launch, but the build itself was solid.",
  },
  {
    name: "Claire Dubois",
    role: "Operations Manager, Meridian",
    rating: 5,
    initials: "CD",
    quote:
      "They replaced four spreadsheets and a shared inbox with one tool the whole warehouse actually uses. Training took an afternoon.",
  },
  {
    name: "Victor Almeida",
    role: "Managing Director, Cobalt Group",
    rating: 3.5,
    initials: "VA",
    quote:
      "Good engineering and a fair price. Communication was slower during the middle stretch than at the start, though it picked back up once we raised it.",
  },
  {
    name: "Hannah Lindqvist",
    role: "Brand Lead, Aster Studio",
    rating: 5,
    initials: "HL",
    quote:
      "The design stage was the strongest part. We reviewed a clickable prototype before development started, so nothing was a surprise on the live site.",
  },
  {
    name: "Ade Balogun",
    role: "CEO, Palladium Ventures",
    rating: 4,
    initials: "AB",
    quote:
      "Straight answers on what our budget could and could not buy. They talked us out of two features we did not need, which is not something I have had from an agency before.",
  },
  {
    name: "Nina Petrova",
    role: "Product Owner, Solace CRM",
    rating: 5,
    initials: "NP",
    quote:
      "We own the repository, the designs and every account. Handover included a walkthrough and documentation good enough that our new hire shipped in her first week.",
  },
];
