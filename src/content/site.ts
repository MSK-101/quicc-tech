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

/**
 * Hero pills. Each file is a finished badge — border, icon and label are all
 * part of the artwork — so the component renders the image on its own rather
 * than composing a pill around it. Natural sizes are recorded so the images
 * reserve their space and never shift the layout while loading.
 */
export const heroBadges = [
  { label: "Mobile Apps", image: "/services-hero-section/mob.png", width: 2172, height: 724 },
  { label: "Websites", image: "/services-hero-section/web.png", width: 2071, height: 759 },
  { label: "Custom Software", image: "/services-hero-section/custom.png", width: 2206, height: 713 },
  { label: "Flutter", image: "/services-hero-section/flutter.png", width: 2172, height: 724 },
  { label: "WordPress", image: "/services-hero-section/wp.png", width: 2172, height: 724 },
  { label: "SaaS", image: "/services-hero-section/saas.png", width: 2172, height: 724 },
] as const;

/**
 * Supplied stat artwork. Each image already carries its own figure and label,
 * so the component renders the picture rather than composing text over it.
 */
export const founderStats = [
  { alt: "60+ products launched", image: "/team/products.png" },
  { alt: "5+ years building for clients", image: "/team/years.png" },
  { alt: "4.9 average client rating", image: "/team/rating.png" },
] as const;
