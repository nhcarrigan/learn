/**
 * @file Content collection definitions for the learn site.
 * @copyright 2026 NHCarrigan
 * @license Naomi's Public License
 * @author NHCarrigan
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment -- astro:content is a virtual module; types not resolvable by ESLint TypeScript parser */
/* eslint-disable @typescript-eslint/no-unsafe-call -- astro:content is a virtual module; types not resolvable by ESLint TypeScript parser */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- astro:content is a virtual module; types not resolvable by ESLint TypeScript parser */

import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.mdx" }),
  schema: z.object({
    category: z.enum([
      "career",
      "community",
      "development",
      "general",
      "security",
      "tools",
    ]),
    description: z.string(),
    difficulty:  z.enum([ "advanced", "beginner", "intermediate" ]),
    publishedAt: z.coerce.date(),
    title:       z.string(),
    updatedAt:   z.coerce.date().optional(),
  }),
});

export const collections = { articles };
