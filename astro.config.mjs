// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import otherLinks from './src/content/otherLinks.json';

// https://astro.build/config
export default defineConfig({
  site: "https://link477.com/",
  integrations: [sitemap({
    customPages: otherLinks
  })],
});