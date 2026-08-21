/**
 * Resolves a public/ asset path against Vite's configured base path, so
 * links keep working when the site is hosted under a subpath (e.g. GitHub
 * Pages' /portfolio/) instead of the domain root.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
