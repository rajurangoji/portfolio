import { Boxes, Route } from "lucide-react";
import { cn } from "@/lib/cn";

interface ProjectVisualProps {
  projectId: string;
  className?: string;
}

/**
 * Abstract, hand-built visual motifs — not real product screenshots.
 * "serhafen" evokes shipment/route tracking, "retailgenie" evokes a product grid.
 */
export function ProjectVisual({ projectId, className }: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative flex h-44 items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary/30",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="glow-orb absolute h-32 w-32 rounded-full" />

      {projectId === "serhafen" ? (
        <div className="relative z-10 flex items-center gap-3">
          {["Inspection", "Clearance", "Handover"].map((stage, i) => (
            <div key={stage} className="flex items-center gap-3">
              <div className="glass flex flex-col items-center gap-1.5 rounded-lg border border-border px-3 py-2.5">
                <Route className="h-4 w-4 text-chart-2" />
                <span className="text-[10px] font-medium text-muted-foreground">{stage}</span>
              </div>
              {i < 2 && <span className="h-px w-6 bg-border" />}
            </div>
          ))}
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="glass flex h-9 w-9 items-center justify-center rounded-md border border-border sm:h-11 sm:w-11"
              style={{ opacity: 1 - i * 0.08 }}
            >
              <Boxes className="h-4 w-4 text-chart-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
