import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    id: "razorpay-payment-gateway",
    name: "Razorpay Payment Gateway Integration",
    type: "Payment Integration",
    tech: ["Razorpay", "NestJS", "Webhooks", "Payment Verification", "Refunds"],
    bullets: [
      "Designed and built a complete Razorpay payment gateway integration end-to-end, owning the entire payment lifecycle from checkout to settlement.",
      "Implemented the checkout flow starting from the customer's 'Pay Now' click through order creation and Razorpay checkout initiation.",
      "Built server-side payment verification to validate signatures and confirm transaction authenticity before marking orders as paid.",
      "Handled Razorpay webhooks to reliably capture asynchronous payment events and keep order status in sync with the gateway.",
      "Implemented refund processing, enabling full and partial refunds to be triggered and tracked through to completion.",
    ],
  },
  {
    id: "serhafen",
    name: "Serhafen – Customs Operations Platform",
    type: "Service Project",
    tech: ["React.js", "NestJS", "Microservices", "SOLID Principles"],
    bullets: [
      "Built a large-scale customs clearance operations system for tracking international shipments across LATAM regions through inspection, clearance, and last-mile handover stages.",
      "Developed real-time operational dashboards in React.js providing live customs status visibility to operations teams, reducing manual status-check effort.",
      "Engineered NestJS microservices to manage customs workflows, package state transitions, and inspection updates — supporting high-volume package processing with minimal latency.",
      "Applied spec-based development practices to map detailed business requirements to discrete, testable backend modules, improving team alignment and reducing integration bugs.",
      "Ensured modular, clean, and maintainable code architecture adhering to SOLID principles to enable future scalability and ease of onboarding new developers.",
    ],
  },
  {
    id: "retailgenie",
    name: "RetailGenie – Catalog Enrichment Platform",
    type: "SaaS Product",
    tech: ["React.js", "NestJS", "Strapi CMS", "Multi-Tenancy", "Virtualization"],
    bullets: [
      "Contributed to a multi-tenant SaaS catalog enrichment platform supporting diverse e-commerce clients with varying marketplace requirements (Amazon, MercadoLibre, etc.).",
      "Implemented end-to-end client onboarding workflows, enabling merchants to upload product data (images, titles, descriptions, attributes) via an intuitive React.js interface.",
      "Built backend APIs using NestJS to process, validate, and dynamically enrich product content based on marketplace-specific business rules.",
      "Integrated Strapi CMS to manage configurable content rules and marketplace schemas, allowing non-technical users to update enrichment logic without code changes.",
      "Designed frontend components for large-scale data rendering (1,000+ product rows) with virtualization techniques, maintaining smooth performance.",
      "Architected the system with scalability and multi-tenancy in mind, ensuring performance held up as client count grew.",
    ],
  },
];
