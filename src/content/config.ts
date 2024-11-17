import { defineCollection, z } from "astro:content";
import { docsSchema } from '@astrojs/starlight/schema'

const technicalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    "public-date": z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  technical: technicalCollection,
  docs: defineCollection({ schema: docsSchema() }),
};
