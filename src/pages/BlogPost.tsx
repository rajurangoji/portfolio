import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { posts } from "@/data/blog";
import { buildBlogPostingJsonLd } from "@/lib/seo";
import { Badge } from "@/components/Badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlogCard } from "@/components/BlogCard";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useSEO({
    title: post?.title ?? "Blog",
    description: post?.excerpt ?? "Article from Raju Rangoji's blog.",
    path: `/blog/${slug ?? ""}`,
    jsonLd: post ? buildBlogPostingJsonLd(post) : undefined,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to blog
      </Link>

      <ScrollReveal className="mt-6">
        <Badge>{post.category}</Badge>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
        <time className="mt-3 block text-sm text-muted-foreground" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </ScrollReveal>

      <ScrollReveal delay={0.05} className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>{post.content}</p>
      </ScrollReveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="text-lg font-semibold">Related articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <BlogCard key={r.slug} post={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
