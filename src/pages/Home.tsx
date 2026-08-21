import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Layers3, Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useSEO } from "@/hooks/useSEO";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skills } from "@/data/skills";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { ExperienceTimelineItem } from "@/components/ExperienceTimelineItem";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsStrip } from "@/components/StatsStrip";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { asset } from "@/lib/assets";

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: `${new Set(experience.map((e) => e.company)).size}`, label: "Companies" },
  { value: `${projects.length}+`, label: "Major Projects" },
  { value: `${skills.length}`, label: "Skill Categories" },
];

export default function Home() {
  useSEO({
    title: "Full Stack Software Engineer",
    description: profile.summary,
    path: "/",
  });

  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-5 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-chart-2/40 bg-chart-2/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-chart-1">
                <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
                Full Stack Developer
              </span>
              <AvailabilityBadge />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Full Stack Developer</span> building production-grade web applications that scale.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
              {profile.summary}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={asset("resume.pdf")}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <ProfilePhoto />
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <StatsStrip stats={stats} />
        </div>
      </section>

      {/* About preview */}
      <section className="border-t border-border px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="About Me" title="Two years of" emphasis="shipping real products." align="left" />
          <ScrollReveal className="mt-6 max-w-3xl text-muted-foreground text-pretty">
            <p>{profile.summary}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-6">
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-chart-2 hover:underline">
              More about me
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-border px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What I Do" title="Technical" emphasis="expertise." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-chart-2 hover:underline">
              See all services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience preview */}
      <section className="border-t border-border px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Career" title="Recent" emphasis="experience." />
          <ol className="mt-12">
            <ExperienceTimelineItem entry={experience[0]} index={0} isLast />
          </ol>
          <div className="text-center">
            <Link to="/experience" className="inline-flex items-center gap-1.5 text-sm font-medium text-chart-2 hover:underline">
              View full experience timeline
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="border-t border-border px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Projects" title="Things I've" emphasis="engineered." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 py-20 sm:px-6">
        <ScrollReveal className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border p-10 text-center sm:p-14">
          <div className="glow-orb absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />
          <h2 className="relative text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's build something <span className="text-gradient">production-ready.</span>
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Open to full stack engineering roles, freelance projects, and collaborations.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Let's Work Together
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View Portfolio
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
