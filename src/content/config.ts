import { z, defineCollection } from 'astro:content';

const technicalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
  }),
});


export const collections = {
  'technical': technicalCollection,
}
