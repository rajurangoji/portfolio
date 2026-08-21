import { motion, useReducedMotion } from "framer-motion";
import { Braces, Database, Layers, ShieldCheck } from "lucide-react";

const nodes = [
  { icon: Braces, label: "TypeScript", className: "left-[6%] top-[18%]", float: "animate-float" },
  { icon: Layers, label: "React.js", className: "right-[8%] top-[10%]", float: "animate-float-slow" },
  { icon: Database, label: "PostgreSQL", className: "left-[10%] bottom-[14%]", float: "animate-float-slow" },
  { icon: ShieldCheck, label: "JWT Auth", className: "right-[4%] bottom-[20%]", float: "animate-float" },
];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-lg items-center justify-center sm:h-[440px]">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="glow-orb absolute h-56 w-56 rounded-full sm:h-72 sm:w-72" aria-hidden="true" />

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass relative z-10 w-64 rounded-2xl border border-border p-5 shadow-xl sm:w-72"
      >
        <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-1/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
        </div>
        <pre className="overflow-hidden font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
          <code>
            <span className="text-chart-2">const</span> engineer = {"{"}
            {"\n"}  stack: [<span className="text-chart-1">"React"</span>,{" "}
            <span className="text-chart-1">"NestJS"</span>],{"\n"}  focus:{" "}
            <span className="text-chart-1">"production-grade"</span>,{"\n"}
            {"}"};
          </code>
        </pre>
      </motion.div>

      {nodes.map(({ icon: Icon, label, className, float }) => (
        <div
          key={label}
          className={`glass absolute z-20 hidden items-center gap-2 rounded-full border border-border px-3 py-2 shadow-md sm:flex ${className} ${
            shouldReduceMotion ? "" : float
          }`}
        >
          <Icon className="h-3.5 w-3.5 text-chart-2" aria-hidden="true" />
          <span className="text-xs font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
}
