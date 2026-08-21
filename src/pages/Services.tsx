import { useSEO } from "@/hooks/useSEO";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";

export default function Services() {
  useSEO({
    title: "Services",
    description: "Full stack development services offered by Raju Rangoji, backed by production experience.",
    path: "/services",
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Expertise"
        title="How I can"
        emphasis="help."
        description="Grounded in production experience — not a generic service menu."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ScrollReveal key={service.id} delay={i * 0.08}>
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
