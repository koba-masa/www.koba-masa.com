import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    starlight({
      title: 'www.koba-masa.com',
    })
  ],
});
