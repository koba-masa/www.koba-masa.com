import { defineCollection, z } from "astro:content";

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
};
