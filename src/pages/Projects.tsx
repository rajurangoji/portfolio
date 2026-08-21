import { useSEO } from "@/hooks/useSEO";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  useSEO({
    title: "Projects",
    description: "Key projects by Raju Rangoji: Serhafen customs operations platform and RetailGenie catalog enrichment SaaS.",
    path: "/projects",
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Portfolio" title="Featured" emphasis="projects." />
      <div className="mt-14 space-y-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} featured />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
