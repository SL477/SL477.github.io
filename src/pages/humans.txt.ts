import site from '../content/site.json';

const now = (new Date()).toISOString().split('T')[0];

const str = `/* TEAM */
Your title: Thomas Fishwick
Site: ${site.site_url}
Github: ${site.github_username}
Location: London, UK

/* SITE */
Last update: ${now}
Language: English
Doctype: HTML5
Standards: HTML5, CSS3
Components: React
Software: Astro, React`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
