import { Newspaper } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { posts } from "@/data/blog";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlogCard } from "@/components/BlogCard";
import { EmptyState } from "@/components/EmptyState";

export default function Blog() {
  useSEO({
    title: "Blog",
    description: "Articles and notes from Raju Rangoji on full stack engineering.",
    path: "/blog",
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Writing" title="From the" emphasis="blog." />
      <div className="mt-14">
        {posts.length === 0 ? (
          <EmptyState
            icon={Newspaper}
            title="No posts yet"
            description="I'm working on my first articles about full stack engineering and AI-driven development. Check back soon."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.06}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
