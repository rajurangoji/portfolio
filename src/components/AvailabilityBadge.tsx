import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

interface AvailabilityBadgeProps {
  className?: string;
}

export function AvailabilityBadge({ className }: AvailabilityBadgeProps) {
  if (!profile.freelanceAvailable) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground",
        className,
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-2 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-chart-2" />
      </span>
      {profile.availabilityText}
    </span>
  );
}
