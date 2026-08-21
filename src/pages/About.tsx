import { GraduationCap, Rocket, Target, Wrench } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { staggerContainer } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

const philosophy = [
  {
    icon: Target,
    title: "Spec-driven clarity",
    description:
      "Translating detailed technical specifications into modular, reusable components — reducing rework and improving delivery predictability.",
  },
  {
    icon: Rocket,
    title: "AI-accelerated delivery",
    description:
      "Leveraging AI-driven development tools and prompt-assisted code generation to accelerate feature delivery without sacrificing code quality.",
  },
  {
    icon: Wrench,
    title: "Clean, maintainable architecture",
    description:
      "Enforcing clean code standards via peer code reviews and reusable component libraries, adhering to SOLID principles to reduce technical debt.",
  },
];

export default function About() {
  useSEO({
    title: "About",
    description: `About ${profile.name} — background, technical strengths, and development philosophy.`,
    path: "/about",
  });

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading eyebrow="About Me" title="The engineer" emphasis="behind the code." align="left" />

          <ScrollReveal className="mt-8 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>{profile.summary}</p>
          </ScrollReveal>
        </div>

        <ProfilePhoto size="md" />
      </div>

      {/* Development philosophy */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold">Development Philosophy</h2>
        <motion.div
          initial={shouldReduceMotion ? undefined : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-6 grid gap-6 sm:grid-cols-3"
        >
          {philosophy.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={shouldReduceMotion ? undefined : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 text-chart-2">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Key technologies */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold">Key Technologies</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.slice(0, 4).map((category, i) => (
            <ScrollReveal key={category.id} delay={i * 0.06}>
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
      </div>

      {/* Education */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="mt-6 space-y-4">
          {profile.education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.08}>
              <Card className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-chart-2">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{edu.period}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
