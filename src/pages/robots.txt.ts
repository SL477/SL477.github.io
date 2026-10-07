import robots from '../content/robots.json';

const robotTxt = robots.map(robot => `User-agent: ${robot}`);
const str = `${robotTxt.join('\n')}
Disallow: /`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
