import type { BlogPost } from "@/types";

export const SITE_URL = "https://rajurangoji.dev";
export const SITE_NAME = "Raju Rangoji";

export interface SEOInput {
  title: string;
  description: string;
  path: string;
  jsonLd?: object;
}

export function buildBlogPostingJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    keywords: post.tags.join(", "),
  };
}
