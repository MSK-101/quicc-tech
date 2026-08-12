export type PricingTier = {
  name: string;
  /** Starting price in USD. */
  price: number;
  /** One-line description of who the tier suits. */
  summary: string;
  features: string[];
  /** Draws the card with the glowing "recommended" treatment. */
  recommended?: boolean;
};

/**
 * Starting prices. These are floors, not quotes — the promo banner and the
 * note under the grid both say so.
 */
export const pricingTiers: PricingTier[] = [
  {
    name: "Landing Page",
    price: 250,
    summary: "One page, one action, live in days.",
    features: [
      "Single high-converting page",
      "Copy & layout guidance",
      "Lead capture form",
      "CRM / email integration",
      "Analytics & event tracking",
      "Mobile-first responsive build",
    ],
  },
  {
    name: "Website",
    price: 500,
    summary: "A multi-page site your team can edit.",
    recommended: true,
    features: [
      "Up to 6 core pages",
      "CMS so you can self-edit",
      "SEO foundations & sitemap",
      "Speed & Core Web Vitals pass",
      "Contact & booking forms",
      "Hosting setup assistance",
    ],
  },
  {
    name: "Custom Software",
    price: 2500,
    summary: "Internal tools and platforms built to fit.",
    features: [
      "Discovery & scoping workshop",
      "Custom database design",
      "Role-based access control",
      "Admin dashboard & reporting",
      "Third-party API integrations",
      "Documentation & handover",
    ],
  },
  {
    name: "Mobile App",
    price: 3500,
    summary: "iOS and Android from one codebase.",
    recommended: true,
    features: [
      "Flutter — iOS & Android",
      "UI/UX design included",
      "Backend & REST APIs",
      "Admin dashboard",
      "Push notifications",
      "App Store & Play submission",
    ],
  },
];

export const milestones = [
  "Discovery",
  "Design",
  "Development",
  "Testing",
  "Launch",
] as const;
