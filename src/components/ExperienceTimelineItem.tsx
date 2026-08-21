import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { ExperienceEntry } from "@/types";
import { Card } from "@/components/Card";

interface ExperienceTimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export function ExperienceTimelineItem({ entry, index, isLast }: ExperienceTimelineItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <li className="relative pl-12 sm:pl-16">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-10 h-[calc(100%-1rem)] w-px bg-border sm:left-[23px]"
        />
      )}
      <motion.span
        initial={shouldReduceMotion ? undefined : { scale: 0 }}
        whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-chart-2 sm:h-12 sm:w-12"
      >
        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.span>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="mb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">{entry.role}</h3>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{entry.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-chart-2">{entry.company}</p>
          <ul className="mt-4 space-y-2.5">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 text-sm text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chart-2" />
                {bullet}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </li>
  );
}
