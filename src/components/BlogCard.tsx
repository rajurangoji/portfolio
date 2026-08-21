import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full focus:outline-none">
      <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
        <div className="flex items-center justify-between gap-2">
          <Badge>{post.category}</Badge>
          <time className="text-xs text-muted-foreground" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </time>
        </div>
        <h3 className="mt-4 flex items-start gap-2 text-lg font-semibold">
          {post.title}
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-chart-2 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
