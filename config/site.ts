export const siteConfig = {
  name: "HubStack",
  title:
    "HubStack | Premium SaaS Starter Kit with Next.js, React, and TypeScript",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  ogImage:
    "https://14j7oh8kso.ufs.sh/f/HLxTbDBCDLwfcdTg8IZL4lkSh8ToYB1P65ZLOvxWeUdfyqmg", // You'll need to create this image
  description:
    "HubStack is a premium Fullstack SaaS starter kit that helps developers build production-ready applications faster. Featuring authentication, payments, email systems, and a beautiful admin dashboard - everything you need to launch your next big project.",
  links: {
    twitter: "https://twitter.com/hubstack",
    github: "https://github.com/hubstack",
    discord: "https://discord.gg/hubstack",
    docs: "https://docs.hubstack.dev",
  },
  contact: {
    support: "support@hubstack.dev",
    sales: "sales@hubstack.dev",
  },
  features: {
    auth: "NextAuth.js with multiple providers",
    payments: "Stripe integration with subscription management",
    email: "Email system with templating",
    dashboard: "Beautiful admin dashboard",
    forms: "Form builder with validation",
    upload: "File upload system",
    database: "Prisma ORM integration",
    api: "REST & GraphQL API support",
  },
};

export type SiteConfig = typeof siteConfig;
