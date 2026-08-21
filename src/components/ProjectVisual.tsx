import { Boxes, CreditCard, RefreshCw, Route, ShieldCheck, Webhook } from "lucide-react";
import { cn } from "@/lib/cn";

interface ProjectVisualProps {
  projectId: string;
  className?: string;
}

const stageFlows: Record<string, { icon: typeof Route; label: string }[]> = {
  serhafen: [
    { icon: Route, label: "Inspection" },
    { icon: Route, label: "Clearance" },
    { icon: Route, label: "Handover" },
  ],
  "razorpay-payment-gateway": [
    { icon: CreditCard, label: "Pay Now" },
    { icon: ShieldCheck, label: "Verify" },
    { icon: Webhook, label: "Webhook" },
    { icon: RefreshCw, label: "Refund" },
  ],
};

/**
 * Abstract, hand-built visual motifs — not real product screenshots.
 * "serhafen" evokes shipment/route tracking, "razorpay-payment-gateway" evokes
 * the payment lifecycle, "retailgenie" evokes a product grid.
 */
export function ProjectVisual({ projectId, className }: ProjectVisualProps) {
  const flow = stageFlows[projectId];

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

      {flow ? (
        <div className="relative z-10 flex items-center gap-1.5 px-2 sm:gap-3 sm:px-0">
          {flow.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-1.5 sm:gap-3">
              <div className="glass flex flex-col items-center gap-1 rounded-lg border border-border px-2 py-2 sm:gap-1.5 sm:px-3 sm:py-2.5">
                <stage.icon className="h-3.5 w-3.5 text-chart-2 sm:h-4 sm:w-4" />
                <span className="text-[9px] font-medium text-muted-foreground sm:text-[10px]">{stage.label}</span>
              </div>
              {i < flow.length - 1 && <span className="h-px w-3 shrink-0 bg-border sm:w-6" />}
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
