import site from '../content/site.json';

const str = `# ${site.title}

> ${site.description}`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
