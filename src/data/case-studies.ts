/**
 * Portfolio Case Studies
 * 
 * This data powers the 'Selected Works' section and individual project pages.
 * In a production environment, this could be replaced by a CMS (Sanity, Contentful) or an API.
 */
export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  badge: string;
  category: string;
  role: string;
  roleDescription: string;
  techStack: string[];
  timeline: string;
  timelineDescription: string;
  projectUrl?: string;
  challenge: string[];
  technicalStrategies: {
    icon: string;
    title: string;
    description: string;
  }[];
  quote: string;
  images: string[];
  outcomes: {
    value: string;
    label: string;
  }[];
  conclusion: string;
  nextProject?: {
    slug: string;
    title: string;
    description: string;
  };
  prevProject?: {
    slug: string;
    title: string;
    description: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fluid-retail",
    title: "Architecting the Future of Fluid Retail.",
    subtitle: "Next-Gen Commerce",
    description:
      "A deep dive into building a high-performance headless commerce engine with focus on micro-interactions and sub-100ms load times.",
    heroImage: "/images/projects/fluid-retail.png",
    badge: "Case Study 2024",
    category: "E-Commerce",
    role: "Lead Frontend Engineer",
    roleDescription: "System Design & UI Engineering",
    techStack: ["Next.js 14", "TypeScript", "Three.js", "Tailwind", "Prismic CMS"],
    timeline: "6 Months",
    timelineDescription: "Jan 2024 — June 2024",
    projectUrl: "https://example.com",
    challenge: [
      "In a world of templated Shopify stores, the client required a digital flagship that felt as premium as their physical ateliers. The primary hurdle was balancing a heavy visual load—4K product cinematography—with the extreme performance requirements of modern SEO.",
      "We needed to bridge the gap between \"experimental web design\" and \"high-conversion commerce.\" Every millisecond of friction removed from the cart journey was projected to yield a 15% increase in annual recurring revenue.",
    ],
    technicalStrategies: [
      {
        icon: "bolt",
        title: "Incremental Static Regeneration",
        description:
          "Implementing ISR allowed us to maintain 20k+ product pages with near-instant updates from the CMS without sacrificing build times.",
      },
      {
        icon: "view_in_ar",
        title: "Optimized WebGL Content",
        description:
          "Custom GLSL shaders for product previews, ensuring 60FPS even on mobile devices through clever vertex management.",
      },
    ],
    quote:
      "The goal wasn't just to build a store, but to create a digital atmosphere where the technology disappears, leaving only the product.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEjmzRTQ7HlnWCozWyRny9AZhWVQtmBXktbI0bMT4jGBiS9F6ZA8ZG-EbqnGF-XcxHomGiPYZRd4pnhVAToL-oc0_1L5NcwoSzOejZZ1m9LZTHvS7Zuk5MJlb-B9N8yXNQacvMgiyqaw4MpuwRlv6KMhrRVOPuRuCYhR_NxL3ecFnZsQEgfaa9l43DAnrBeiCSOzoqJlW7yQX19F8vJN0Iin-H9jfOjhStNvqt7qeC_cWyZUDEd3_Q701fIjG6I1hA17XW5aEa8TCd",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvYp_PuO1_FRHavgGMIKUc4Ndsc1yUMm5UxpyKlOhgTPIMfkCZNHN_0qUpnKbixDROUx_Q1Ak8lv-RQYoPaHInu7F_6s0QJzbyHCudEPqTnt_kNB2R1qH9BoYOTC-y21llq5d6LwVMOxX4hK_Vn52gPESk7I9mnbtbjfOvLJHLeoxsoKZA0P2SOpLIVgWv4G-HcgF8XG-NJb5d_XGnal-oY3T-7aoeuWkObA005Zwxnz5Kjzewc-9rwZeI-A4KfWhpk92QjAMKulZ9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMQ5zh-fqDbT9fbX2bdngYqvPzjoUIKR48QL3Q9P_YeixMw8_RIsErD-AEErlIp7EMl-E2tIxZxDrZaR3zGkMYokFDBbvaPQXtSJ9D3PKoJLfXlWulW8k0GL36gaPWXqWMsF4amF7egKa6hIBauKbv36AucU2URRlTzyV3tDadPkAlO9FFpPaZat-Zb4u6EvdmNlzR-Z9vDSSnO1UNVaPk6JyOpaDNKSOlbp8BKT-oYFuxugI8qVh5tnT6utnnnB-xt5VbnZHqXdUZ",
    ],
    outcomes: [
      { value: "99", label: "Lighthouse Score" },
      { value: "+42%", label: "Conversion Lift" },
      { value: "0.4s", label: "Avg. Page Load" },
    ],
    conclusion:
      "Post-launch metrics exceeded expectations. The platform now handles peaks of 5,000 concurrent users without any degradation in latency. The architectural foundation we laid has since been adopted as the internal standard for the client's global digital ecosystem.",
    nextProject: {
      slug: "neuroscale-ai",
      title: "NeuroScale AI Architecture",
      description: "A dashboard for managing distributed neural networks.",
    },
  },
  {
    slug: "neuroscale-ai",
    title: "NeuroScale AI Architecture",
    subtitle: "Machine Learning",
    description:
      "Building an intelligent dashboard for managing and monitoring distributed neural network training across global data centers.",
    heroImage: "/images/projects/neuroscale.png",
    badge: "Case Study 2024",
    category: "AI/ML",
    role: "Full-Stack Engineer",
    roleDescription: "Architecture & Real-time Systems",
    techStack: ["Python", "FastAPI", "React", "WebSocket", "Kubernetes"],
    timeline: "4 Months",
    timelineDescription: "July 2024 — October 2024",
    projectUrl: "https://example.com/neuroscale",
    challenge: [
      "Managing distributed neural network training across multiple data centers required real-time monitoring and intelligent resource allocation. The existing tooling was fragmented and lacked the unified visibility needed for efficient operations.",
      "We needed to build a platform that could handle millions of metrics per second while providing instant insights and automated responses to training anomalies.",
    ],
    technicalStrategies: [
      {
        icon: "speed",
        title: "Real-time Data Pipeline",
        description:
          "Built a custom streaming architecture using WebSockets and Redis Pub/Sub to deliver sub-50ms metric updates to connected clients.",
      },
      {
        icon: "memory",
        title: "Intelligent Auto-scaling",
        description:
          "Implemented predictive scaling algorithms that analyze training patterns and pre-allocate resources before demand spikes.",
      },
    ],
    quote:
      "When you're training models that cost thousands of dollars per hour, every second of visibility matters. We made the invisible, visible.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmg0LaKNDGc7jIUU1kiV9MUtyxFaBDuvy92BmOnhaue0Mu9_U7kSBMN9PPNXpxweRY8jvdq3qCSnlIWCRyiyD2-umm9WiryAKV_JwrZDxmKJEFL0AR_V4rwPbBywGMpvnn9RNxPiUNEeVKK-9zJzngxR3JoLk0GdTwuar9V3LRPCG480cuytcBttyx9s7E3JjI_-CeYk6WX1cQ0NWjBsPVFSeYLjbga4QNBQ4h28JdjwkZAB8aGTghuxVNFaAsC9U4_rQ4oF4QGwpx",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8cO_W3cWbERdKPYOrd_bCZ1kGcjo8cu7WtswB5RwdNjwi_o7VeqTRbgSKXDETi2t1ZVFhw4JozebTirxKGrcz5l_ux_D4Lpc9SgXBmihsORGH0jpwx8NDqqOpLwXTgtKwmxH_xxJQZ-7EXlyWVbrHHLK8rSxD_G4GPMg4v6mUuPfBJyM5N-H99pYPTHogjhZaKwvq5oEa0cr5rF1zyVbOmT7Smr0n7RT5AlXvoRxRB4yAi19c3cEw2zrptdHkr7TpO-Kd2whqcMgv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KDOGYbOJMOj453gipSj9VCU8CZlqHkqyRV02ugAiA-2-NZemXTxFx925f0zDk7ImhiUX83vPrbckXQVbvWGNoL_i0VVDXwaDP_KznZv4j09celLtjIV5bohg-t5tvTP578DOLj0R2vXJvWHPXlRIMS4ImtoycI5pvrFD5osNqXtjRUikVItRHRRrciVTcVq6Mkc8bTOKHmKqS4q7lvuyOqRfEnJrREc0vdCk_07ih_Ul2yqWCnwyvePGKMXrybuKhPZcQ3DR_MU2",
    ],
    outcomes: [
      { value: "50ms", label: "Update Latency" },
      { value: "-35%", label: "Training Costs" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    conclusion:
      "The platform now monitors over 2,000 active training jobs across 15 data centers. The intelligent auto-scaling feature alone has saved the client an estimated $2M annually in compute costs.",
    prevProject: {
      slug: "fluid-retail",
      title: "Architecting the Future of Fluid Retail.",
      description:
        "A high-performance headless commerce engine with micro-interactions.",
    },
    nextProject: {
      slug: "saas-analytics",
      title: "SaaS Analytics Platform",
      description: "Visualizing complex data sets in real-time.",
    },
  },
  {
    slug: "saas-analytics",
    title: "SaaS Analytics Platform",
    subtitle: "Data Visualization",
    description:
      "Creating an intuitive analytics dashboard that transforms complex business metrics into actionable insights through beautiful visualizations.",
    heroImage: "/images/projects/saas-analytics.png",
    badge: "Case Study 2023",
    category: "SaaS",
    role: "Senior Frontend Developer",
    roleDescription: "Data Visualization & UX",
    techStack: ["React", "D3.js", "TypeScript", "GraphQL", "PostgreSQL"],
    timeline: "5 Months",
    timelineDescription: "Aug 2023 — Dec 2023",
    projectUrl: "https://example.com/analytics",
    challenge: [
      "The client's existing analytics solution was overwhelming users with raw data dumps. They needed a platform that could surface meaningful insights without requiring a data science degree to interpret.",
      "Performance was critical—dashboards needed to render thousands of data points instantly while remaining responsive on mobile devices.",
    ],
    technicalStrategies: [
      {
        icon: "analytics",
        title: "Virtualized Data Rendering",
        description:
          "Implemented canvas-based rendering with virtualization to handle datasets with millions of rows without frame drops.",
      },
      {
        icon: "auto_awesome",
        title: "Smart Aggregation Layer",
        description:
          "Built an intelligent caching layer that pre-aggregates frequently accessed metrics, reducing query times by 90%.",
      },
    ],
    quote:
      "Data without context is just noise. We turned their data into a story that anyone in the organization could understand.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KDOGYbOJMOj453gipSj9VCU8CZlqHkqyRV02ugAiA-2-NZemXTxFx925f0zDk7ImhiUX83vPrbckXQVbvWGNoL_i0VVDXwaDP_KznZv4j09celLtjIV5bohg-t5tvTP578DOLj0R2vXJvWHPXlRIMS4ImtoycI5pvrFD5osNqXtjRUikVItRHRRrciVTcVq6Mkc8bTOKHmKqS4q7lvuyOqRfEnJrREc0vdCk_07ih_Ul2yqWCnwyvePGKMXrybuKhPZcQ3DR_MU2",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEjmzRTQ7HlnWCozWyRny9AZhWVQtmBXktbI0bMT4jGBiS9F6ZA8ZG-EbqnGF-XcxHomGiPYZRd4pnhVAToL-oc0_1L5NcwoSzOejZZ1m9LZTHvS7Zuk5MJlb-B9N8yXNQacvMgiyqaw4MpuwRlv6KMhrRVOPuRuCYhR_NxL3ecFnZsQEgfaa9l43DAnrBeiCSOzoqJlW7yQX19F8vJN0Iin-H9jfOjhStNvqt7qeC_cWyZUDEd3_Q701fIjG6I1hA17XW5aEa8TCd",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrhT1dvcBvI5LnFyDiSbOu-FoS7EPuGSqhtZxX7kEJ6Z4aFkrsAUSC9OFomKhDHcm538ulFicXlEf-QO0K-h5_V4tX6ZQBftCOKJajp5196XvkS4qAg7J1BNOTh8MnVQ-xalti6b1ubS4T9njBgjU3rdhmP9u8oPMADJMVYhQpvolF3_HX2HwC8Cm5twE6Dy6jaN4NwTtPX4s32TELuwbfGp0qGanx4AQido68B2JMx3CGtukmy-4DrFnIdpTpoGM3lFf1CFYForBk",
    ],
    outcomes: [
      { value: "3x", label: "User Engagement" },
      { value: "-90%", label: "Query Time" },
      { value: "4.8★", label: "User Rating" },
    ],
    conclusion:
      "User engagement with analytics features increased by 300% post-launch. The platform now processes over 10 million events daily and has become the primary decision-making tool for the client's executive team.",
    prevProject: {
      slug: "neuroscale-ai",
      title: "NeuroScale AI Architecture",
      description: "A dashboard for managing distributed neural networks.",
    },
    nextProject: {
      slug: "fintech-cloud",
      title: "Cloud-Native FinTech",
      description: "Scaling financial services with serverless architecture.",
    },
  },
  {
    slug: "fintech-cloud",
    title: "Cloud-Native FinTech",
    subtitle: "Financial Technology",
    description:
      "Re-engineering a legacy financial platform into a globally distributed serverless architecture handling billions in transactions.",
    heroImage: "/images/projects/fintech.png",
    badge: "Case Study 2025",
    category: "FinTech",
    role: "Lead Architect",
    roleDescription: "Cloud Infrastructure & Backend",
    techStack: ["AWS Lambda", "DynamoDB", "Next.js", "Terraform"],
    timeline: "8 Months",
    timelineDescription: "Jan 2025 - Aug 2025",
    projectUrl: "https://example.com/fintech",
    challenge: [
      "The client's legacy mainframe system was struggling to keep up with the volume of modern digital transactions. Latency was high, and maintenance costs were skyrocketing.",
      "The goal was to migrate to a cloud-native architecture without any downtime for the millions of active users.",
    ],
    technicalStrategies: [
      {
        icon: "cloud_queue",
        title: "Serverless Migration",
        description:
          "Moved core transaction processing to event-driven AWS Lambda functions, reducing idle costs by 60%.",
      },
      {
        icon: "security",
        title: "Zero-Trust Security",
        description:
          "Implemented comprehensive zero-trust networking with mutual TLS and strict IAM policies.",
      },
    ],
    quote:
      "Modernizing finance means building systems that are as reliable as a vault but as agile as a startup.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEjmzRTQ7HlnWCozWyRny9AZhWVQtmBXktbI0bMT4jGBiS9F6ZA8ZG-EbqnGF-XcxHomGiPYZRd4pnhVAToL-oc0_1L5NcwoSzOejZZ1m9LZTHvS7Zuk5MJlb-B9N8yXNQacvMgiyqaw4MpuwRlv6KMhrRVOPuRuCYhR_NxL3ecFnZsQEgfaa9l43DAnrBeiCSOzoqJlW7yQX19F8vJN0Iin-H9jfOjhStNvqt7qeC_cWyZUDEd3_Q701fIjG6I1hA17XW5aEa8TCd",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvYp_PuO1_FRHavgGMIKUc4Ndsc1yUMm5UxpyKlOhgTPIMfkCZNHN_0qUpnKbixDROUx_Q1Ak8lv-RQYoPaHInu7F_6s0QJzbyHCudEPqTnt_kNB2R1qH9BoYOTC-y21llq5d6LwVMOxX4hK_Vn52gPESk7I9mnbtbjfOvLJHLeoxsoKZA0P2SOpLIVgWv4G-HcgF8XG-NJb5d_XGnal-oY3T-7aoeuWkObA005Zwxnz5Kjzewc-9rwZeI-A4KfWhpk92QjAMKulZ9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMQ5zh-fqDbT9fbX2bdngYqvPzjoUIKR48QL3Q9P_YeixMw8_RIsErD-AEErlIp7EMl-E2tIxZxDrZaR3zGkMYokFDBbvaPQXtSJ9D3PKoJLfXlWulW8k0GL36gaPWXqWMsF4amF7egKa6hIBauKbv36AucU2URRlTzyV3tDadPkAlO9FFpPaZat-Zb4u6EvdmNlzR-Z9vDSSnO1UNVaPk6JyOpaDNKSOlbp8BKT-oYFuxugI8qVh5tnT6utnnnB-xt5VbnZHqXdUZ",
    ],
    outcomes: [
      { value: "99.99%", label: "Availability" },
      { value: "20ms", label: "Transaction Time" },
      { value: "$1M+", label: "Annual Savings" },
    ],
    conclusion:
      "The new platform successfully processes over 500 transactions per second with sub-second latency. The move to serverless has not only improved performance but also enabled rapid feature deployment.",
    prevProject: {
      slug: "saas-analytics",
      title: "SaaS Analytics Platform",
      description: "Visualizing complex data sets in real-time.",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
