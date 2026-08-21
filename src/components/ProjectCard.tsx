import type { ProjectEntry } from "@/types";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ProjectVisual } from "@/components/ProjectVisual";

interface ProjectCardProps {
  project: ProjectEntry;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card className={featured ? "md:p-8" : ""}>
      <ProjectVisual projectId={project.id} className={featured ? "h-56" : undefined} />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <Badge>{project.type}</Badge>
      </div>
      <ul className="mt-4 space-y-2.5">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5 text-sm text-muted-foreground">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chart-2" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Card>
  );
}
