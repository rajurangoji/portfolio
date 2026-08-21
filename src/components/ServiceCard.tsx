import { Blocks, Code2, KeyRound, Layers3, Server, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceEntry } from "@/types";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const iconMap: Record<string, LucideIcon> = {
  "full-stack": Layers3,
  frontend: Code2,
  "backend-api": Server,
  cms: Blocks,
  "auth-security": KeyRound,
  "spec-ai-driven": Sparkles,
};

interface ServiceCardProps {
  service: ServiceEntry;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.id] ?? Code2;

  return (
    <Card className="h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 text-chart-2">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {service.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Card>
  );
}
