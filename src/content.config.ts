import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { blogDir, hasPostFiles } from "./lib/post-files";

// One folder per post, so images sit beside the Markdown; the folder name is the slug.
const posts = glob({ base: blogDir, pattern: "*/index.{md,mdx}", generateId: ({ entry }) => entry.split("/")[0] });

const blog = defineCollection({
  loader: {
    name: "blog",
    load: async (context) => {
      // Without a watcher (a build) no post can appear later, so skip glob's empty-directory warning.
      if (!context.watcher && !hasPostFiles()) return context.store.clear();
      return posts.load(context);
    },
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
