import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border p-6 transition-colors duration-300",
        glass ? "glass" : "bg-card",
        "hover:border-ring/60",
        className,
      )}
    >
      {children}
    </div>
  );
}
