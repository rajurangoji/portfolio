import { Download } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { asset } from "@/lib/assets";

export default function Resume() {
  useSEO({
    title: "Resume",
    description: `Full resume of ${profile.name} — summary, skills, experience, projects, and education.`,
    path: "/resume",
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Resume" title="My" emphasis="resume." align="left" />

      <ScrollReveal className="mt-8">
        <a
          href={asset("resume.pdf")}
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          Download Resume (PDF)
        </a>
      </ScrollReveal>

      {/* Summary */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Summary</h2>
        <ScrollReveal>
          <p className="mt-4 text-muted-foreground text-pretty">{profile.summary}</p>
        </ScrollReveal>
      </section>

      {/* Skills */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skills.map((category) => (
            <ScrollReveal key={category.id}>
              <Card>
                <h3 className="text-sm font-semibold text-chart-2">{category.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-4">
          {experience.map((entry) => (
            <ScrollReveal key={entry.id}>
              <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {entry.role} · <span className="text-chart-2">{entry.company}</span>
                  </h3>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{entry.period}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chart-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-6 space-y-4">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <Card>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{project.name}</h3>
                  <Badge>{project.type}</Badge>
                </div>
                <ul className="mt-3 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chart-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="mt-6 space-y-4">
          {profile.education.map((edu) => (
            <ScrollReveal key={edu.degree}>
              <Card>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{edu.period}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
