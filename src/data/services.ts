import type { ServiceEntry } from "@/types";

export const services: ServiceEntry[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    description:
      "Architecting and delivering full stack features end-to-end — React.js on the frontend and NestJS on the backend — for enterprise-grade production applications.",
    tech: ["React.js", "NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Building responsive, data-rich, interactive dashboards and UI components that perform consistently across desktop and mobile, converting Figma designs into pixel-accurate, functional interfaces.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "ShadCN/UI", "Material UI"],
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Engineering NestJS/Express.js microservices and REST APIs to manage business workflows, state transitions, and high-volume data processing with minimal latency.",
    tech: ["NestJS", "Express.js", "Node.js", "REST API Design"],
  },
  {
    id: "cms",
    title: "CMS Development",
    description:
      "Integrating Strapi CMS for content modeling, custom plugins, and role-based access — enabling non-technical users to manage configurable content rules without code changes.",
    tech: ["Strapi CMS", "Content Modeling", "Custom Plugins"],
  },
  {
    id: "auth-security",
    title: "Authentication & Security",
    description:
      "Designing and implementing secure, role-based authentication and authorization systems from scratch, ensuring compliance with security best practices.",
    tech: ["JWT", "OAuth", "Role-Based Access Control"],
  },
  {
    id: "spec-ai-driven",
    title: "Spec-Based & AI-Driven Development",
    description:
      "Translating detailed technical specifications into modular, reusable components, and leveraging AI-driven development tools to accelerate delivery and improve code quality.",
    tech: ["Spec-Based Development", "AI-Driven Development", "GitHub Copilot"],
  },
];
