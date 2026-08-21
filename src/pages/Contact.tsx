import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useSEO } from "@/hooks/useSEO";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/Card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
];

export default function Contact() {
  useSEO({
    title: "Contact",
    description: `Get in touch with ${profile.name} — email, phone, LinkedIn, and GitHub.`,
    path: "/contact",
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's work"
        emphasis="together."
        description="Have a role, project, or idea in mind? Reach out directly — I typically respond within a day."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {contactLinks.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 0.06}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="block"
            >
              <Card className="flex items-center gap-4 transition-transform hover:-translate-y-0.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-chart-2">
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{link.label}</p>
                  <p className="font-medium">{link.value}</p>
                </div>
              </Card>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2} className="mt-8">
        <Card className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-chart-2">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
            <p className="font-medium">{profile.location}</p>
          </div>
        </Card>
      </ScrollReveal>

      <ScrollReveal delay={0.26} className="mt-12 text-center">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <Mail className="h-4 w-4" />
          Let's Work Together
        </a>
      </ScrollReveal>
    </div>
  );
}
