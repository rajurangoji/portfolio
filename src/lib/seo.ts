import type { BlogPost } from "@/types";

// TODO: switch back to "https://rajurangoji.dev" once the custom domain is attached to GitHub Pages.
export const SITE_URL = "https://rajurangoji.github.io/portfolio";
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
