import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className, glass = true }: CardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "rounded-xl border border-border p-6 transition-colors duration-300",
        glass ? "glass" : "bg-card",
        "hover:border-ring/60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
