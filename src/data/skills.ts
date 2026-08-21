import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap 5",
      "ShadCN/UI",
      "Material UI",
      "Website Development",
    ],
  },
  {
    id: "backend",
    category: "Backend",
    items: [
      "NestJS",
      "Express.js",
      "Node.js",
      "REST API Design",
      "Authentication & Authorization (JWT/OAuth)",
      "Razorpay Payment Gateway",
      "Webhooks",
    ],
  },
  {
    id: "cms",
    category: "CMS",
    items: ["Strapi CMS", "Content Modeling", "API Integration", "Custom Plugins", "Role-Based Access"],
  },
  {
    id: "databases",
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    items: ["AWS", "CI/CD Pipelines", "Git", "GitHub"],
  },
  {
    id: "design-ux",
    category: "Design & UX",
    items: ["Figma", "UI/UX Prototyping", "Responsive Design"],
  },
  {
    id: "methodologies",
    category: "Methodologies",
    items: ["Spec-Based Development", "AI-Driven Development", "Agile/Scrum", "Clean Code Principles", "Code Review"],
  },
];
