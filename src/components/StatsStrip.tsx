import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/motion";

interface Stat {
  label: string;
  value: string;
}

interface StatsStripProps {
  stats: Stat[];
}

export function StatsStrip({ stats }: StatsStripProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={shouldReduceMotion ? undefined : scaleIn}
          className="glass rounded-xl border border-border px-4 py-6 text-center"
        >
          <div className="text-gradient text-2xl font-bold sm:text-3xl">{stat.value}</div>
          <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
