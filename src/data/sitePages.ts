export type SitePage = {
  description: string;
  eyebrow: string;
  sections: {
    body: string;
    title: string;
  }[];
  slug: string;
  title: string;
};

export const sitePages: SitePage[] = [
  {
    slug: "affiliate-program",
    eyebrow: "Partner with ByteSpace",
    title: "Affiliate Program",
    description: "Learn how the ByteSpace affiliate program is intended to work.",
    sections: [
      {
        title: "Share useful courses",
        body: "The affiliate program is designed for creators and educators who want to recommend relevant ByteSpace courses to their audiences.",
      },
      {
        title: "Applications",
        body: "Affiliate applications are not open yet. Program terms, commission details, and application requirements will be published before enrollment begins.",
      },
    ],
  },
  {
    slug: "contact",
    eyebrow: "Get in touch",
    title: "Contact",
    description: "Find out how to contact the ByteSpace team.",
    sections: [
      {
        title: "Support",
        body: "Live support is not connected to this site yet. Support hours and verified contact channels will be added here before launch.",
      },
      {
        title: "Course questions",
        body: "For now, course availability, pricing, and lesson information can be reviewed directly from each course page.",
      },
    ],
  },
  {
    slug: "help",
    eyebrow: "ByteSpace support",
    title: "Help Center",
    description: "Guidance for browsing courses and using the ByteSpace website.",
    sections: [
      {
        title: "Finding a course",
        body: "Use the course catalog or search page to browse by title and category. Selecting a course opens its dedicated overview page.",
      },
      {
        title: "Accounts and enrollment",
        body: "Account authentication and course enrollment services are not connected in this frontend release. These features will be documented when the services are available.",
      },
    ],
  },
  {
    slug: "about",
    eyebrow: "About ByteSpace",
    title: "Creative learning, made approachable",
    description: "Learn about the purpose behind ByteSpace.",
    sections: [
      {
        title: "Our focus",
        body: "ByteSpace brings practical creative and digital courses together in one clear learning experience for students and independent professionals.",
      },
      {
        title: "Built for creators",
        body: "The platform is designed to help creators present their expertise and help learners discover useful, project-focused instruction.",
      },
    ],
  },
  {
    slug: "privacy-policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    description: "How this ByteSpace frontend handles personal information.",
    sections: [
      {
        title: "Current data handling",
        body: "This frontend release does not store account credentials, newsletter subscriptions, or payment information because those services are not connected.",
      },
      {
        title: "Future services",
        body: "This policy must be updated before authentication, analytics, payments, or email subscriptions are enabled. Any future service should explain what it collects, why it is needed, and how users can request deletion.",
      },
    ],
  },
  {
    slug: "terms-of-service",
    eyebrow: "Legal",
    title: "Terms of Service",
    description: "The current terms for using the ByteSpace frontend demonstration.",
    sections: [
      {
        title: "Frontend demonstration",
        body: "ByteSpace is currently presented as a frontend demonstration. Course purchases, account access, certificates, and creator payouts are not available through this release.",
      },
      {
        title: "Course information",
        body: "Course descriptions and prices are sample content and should not be treated as an active commercial offer until the required services and final terms are published.",
      },
    ],
  },
  {
    slug: "cookies-settings",
    eyebrow: "Privacy controls",
    title: "Cookie Settings",
    description: "Review the current cookie behavior of the ByteSpace frontend.",
    sections: [
      {
        title: "Current use",
        body: "This frontend does not currently enable advertising or analytics cookies. There are no optional cookie categories to configure in this release.",
      },
      {
        title: "When this changes",
        body: "A consent control should be added before any optional analytics or marketing technology is introduced.",
      },
    ],
  },
];

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
