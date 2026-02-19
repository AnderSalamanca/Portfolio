import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    coverImage: image(),
    tags: z.array(z.string()),
    publishDate: z.coerce.date(),
    githubUrl: z.string().url().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};