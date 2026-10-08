// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import otherLinks from './src/content/otherLinks.json';
import generatedPages from './src/integrations/generated-pages';

// https://astro.build/config
export default defineConfig({
  site: "https://link477.com/",
  integrations: [sitemap({
    customPages: otherLinks
  }), generatedPages()],
  redirects: {
    '/github': 'https://github.com/SL477'
  }
});