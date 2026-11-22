import { existsSync, readdirSync } from "node:fs";

/** Directory of the blog's Markdown posts, relative to the project root. */
export const blogDir = "./src/content/blog";

/** Whether any post (`<slug>/index.md` or `.mdx`) exists. Astro warns when an empty collection is loaded or read. */
export function hasPostFiles(): boolean {
  return readdirSync(blogDir, { withFileTypes: true }).some(
    (entry) => entry.isDirectory() && ["md", "mdx"].some((ext) => existsSync(`${blogDir}/${entry.name}/index.${ext}`)),
  );
}
