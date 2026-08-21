import type { SkillCategory } from "@/types";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

interface SkillCategoryCardProps {
  skillCategory: SkillCategory;
}

export function SkillCategoryCard({ skillCategory }: SkillCategoryCardProps) {
  return (
    <Card>
      <h3 className="text-base font-semibold text-chart-2">{skillCategory.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skillCategory.items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </Card>
  );
}
