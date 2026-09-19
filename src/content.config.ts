// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      last_modified_at: z.date(),
      description: z.string().optional(),
      author: z.string(),
      image: z.object({
        path: z.string(),
        filetype: z.string(),
        alt: z.string(),
        webp: z.string().optional(),
        image_map: z.string().optional(),
        photo_caption: z.string().optional(),
        width: z.number(),
        height: z.number()
      }).optional(),
      tags: z.array(z.string()),
      in_reply_to: z.object({
        url: z.string(),
        text: z.string()
      }).optional(),
      syndication: z.object({
        url: z.string(),
        text: z.string()
      }).optional(),
      excerpt: z.string().optional(),
      type: z.string().optional(),
      rating: z.number().optional(),
      watched: z.date().optional(),
      finished: z.date().optional(),
      no_comments: z.boolean().optional()
    })
});

const movie = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/movies" }),
    schema: z.object({
      title: z.string(),
      last_modified_at: z.date(),
      description: z.string().optional(),
      author: z.string(),
      image: z.object({
        path: z.string(),
        filetype: z.string(),
        alt: z.string(),
        webp: z.string().optional(),
        image_map: z.string().optional(),
        photo_caption: z.string().optional(),
        width: z.number(),
        height: z.number()
      }).optional(),
      tags: z.array(z.string()),
      in_reply_to: z.object({
        url: z.string(),
        text: z.string()
      }).optional(),
      syndication: z.object({
        url: z.string(),
        text: z.string()
      }).optional(),
      excerpt: z.string().optional(),
      type: z.string(),
      rating: z.number(),
      watched: z.date(),
      finished: z.date().optional(),
      no_comments: z.boolean().optional(),
      date: z.date()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, movie };