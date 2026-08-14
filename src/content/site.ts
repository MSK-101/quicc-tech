/**
 * Company-wide facts and copy that appear in more than one place.
 * Everything the marketing site says about Quicc should originate here or in
 * one of the sibling files in `src/content`, never inline in a component.
 */

import type { SocialIconName } from "@/components/icons/social-icons";

export const site = {
  name: "Quicc Technologies",
  shortName: "QuiccTech",
  /**
   * Set vertically down the left edge of the hero. Split so the two halves can
   * carry the two ends of the logo gradient, as the logo itself does.
   */
  wordmarkPrimary: "QUICC",
  wordmarkSecondary: "TECH",
  domain: "QuiccTech.io",
  url: "https://quicctech.io",
  email: "Info@QuiccTech.io",
  tagline: "Building Powerful Digital Solutions for Modern Businesses",
  description:
    "Quicc Technologies develops custom mobile apps, websites, software platforms, and digital solutions that help startups and businesses launch, scale, and grow.",
} as const;

/** Persistent bar pinned above the header. */
export const promoBanner = {
  headline: "Limited-Time Launch Pricing",
  detail:
    "Final pricing determined after consultation. Costs vary by project scope and features. Rates subject to change",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#founder" },
  { label: "FAQ", href: "#faq" },
] as const;

export const socialLinks: { label: string; icon: SocialIconName; href: string }[] =
  [
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "X (Twitter)", icon: "twitter", href: "#" },
    { label: "Facebook", icon: "facebook", href: "#" },
  ];

export const heroBadges = [
  "Mobile Apps",
  "Websites",
  "SaaS",
  "Custom Software",
  "Flutter",
  "WordPress",
] as const;

export const founderStats = [
  { value: 60, suffix: "+", label: "Products shipped" },
  { value: 5, suffix: "+ Yrs", label: "Building for clients" },
  { value: 4.9, suffix: "", label: "Average client rating" },
] as const;
