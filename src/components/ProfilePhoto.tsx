import { useState } from "react";
import { HeroVisual } from "@/components/HeroVisual";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/assets";

interface ProfilePhotoProps {
  className?: string;
  size?: "lg" | "md";
}

/**
 * Renders /images/profile.jpg when present; falls back to the abstract
 * HeroVisual automatically if the file hasn't been added yet (404).
 */
export function ProfilePhoto({ className, size = "lg" }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <HeroVisual />;

  const wrapperSize = size === "lg" ? "h-[380px] max-w-lg sm:h-[440px]" : "h-[300px] max-w-sm sm:h-[340px]";
  const imgSize = size === "lg" ? "h-72 w-60 sm:h-80 sm:w-64" : "h-56 w-48 sm:h-64 sm:w-52";

  return (
    <div className={cn("relative mx-auto flex w-full items-center justify-center", wrapperSize, className)}>
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="glow-orb absolute h-56 w-56 rounded-full sm:h-72 sm:w-72" aria-hidden="true" />
      <img
        src={asset("images/profile.jpg")}
        alt={profile.name}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={cn("relative z-10 rounded-2xl border border-border object-cover shadow-xl", imgSize)}
      />
    </div>
  );
}
