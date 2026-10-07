import type { AstroIntegration } from 'astro';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

export default function generatedPages(): AstroIntegration {
  return {
    name: 'generated-pages',
    hooks: {
      'astro:build:done': async ({ pages }) => {
        const urls = pages.map(({ pathname }) => pathname).sort();
        const file = fileURLToPath(
          new URL('../content/generated-pages.json', import.meta.url)
        );
        await writeFile(file, JSON.stringify(urls, null));
      }
    }
  };
}