import { useSEO } from "@/hooks/useSEO";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SkillCategoryCard } from "@/components/SkillCategoryCard";

export default function Skills() {
  useSEO({
    title: "Skills",
    description: "Technical skills of Raju Rangoji across frontend, backend, CMS, databases, cloud & DevOps, and design.",
    path: "/skills",
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Toolbox" title="Technical" emphasis="skills." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <ScrollReveal key={category.id} delay={i * 0.06}>
            <SkillCategoryCard skillCategory={category} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
