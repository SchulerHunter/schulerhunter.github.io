import { getCollection, type CollectionEntry } from "astro:content";
import { hasPostFiles } from "./post-files";

export type Post = CollectionEntry<"blog">;

/** Returns posts newest first; drafts are included only in `astro dev`. */
export async function getPosts(): Promise<Post[]> {
  if (!hasPostFiles()) return [];
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Formats a date as e.g. "Nov 22, 2026" in UTC so builds don't depend on the machine's zone. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

/** Estimated reading time of a post, e.g. "4 min read". */
export function readingTime(post: Post): string {
  const words = post.body?.split(/\s+/).filter(Boolean).length ?? 0;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}
