// Site Configuration - Easy customization for template buyers
// Edit this file to personalize your portfolio

export const siteConfig = {
  // ===== PERSONAL INFO =====
  name: "Your Name",
  title: "DEV PORTFOLIO",
  role: "Full-Stack Developer",
  tagline: "Building digital experiences with precision and care.",
  description:
    "Independent developer specializing in high-performance web architecture, minimalist interfaces, and scalable system design.",
  location: "City, Country",
  availability: "Available for new projects",
  availabilityPeriod: "Q3 2026",

  // ===== CONTACT INFO =====
  email: "hello@developer.com",
  phone: "", // Optional

  // ===== SOCIAL LINKS =====
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
    instagram: "", // Optional
    youtube: "", // Optional
  },

  // ===== SEO & METADATA =====
  siteUrl: "https://yoursite.com",
  ogImage: "/og-image.png",
  keywords: [
    "developer portfolio",
    "full-stack developer",
    "web developer",
    "react developer",
    "next.js developer",
  ],

  // ===== THEME CONFIGURATION =====
  theme: {
    // Primary brand color (used for accents, buttons, links)
    primaryColor: "#1f6b75",
    // Default theme mode: "dark" | "light"
    defaultMode: "dark" as const,
  },

  // ===== NAVIGATION =====
  nav: {
    logo: {
      icon: "terminal", // Material Symbol icon name
      text: "DEV PORTFOLIO",
    },
    links: [
      { label: "Work", href: "/works" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // ===== FOOTER =====
  footer: {
    copyright: `© ${new Date().getFullYear()} Crafted with care.`,
    showSocials: true,
  },
};

// Type export for TypeScript support
export type SiteConfig = typeof siteConfig;
