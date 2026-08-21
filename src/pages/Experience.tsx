import { useSEO } from "@/hooks/useSEO";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceTimelineItem } from "@/components/ExperienceTimelineItem";

export default function Experience() {
  useSEO({
    title: "Experience",
    description: "Professional experience of Raju Rangoji across AndinoLabs, Callensights, and Yantram Medtech.",
    path: "/experience",
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Career" title="Experience" emphasis="timeline." align="left" />
      <ol className="mt-14">
        {experience.map((entry, i) => (
          <ExperienceTimelineItem key={entry.id} entry={entry} index={i} isLast={i === experience.length - 1} />
        ))}
      </ol>
    </div>
  );
}
