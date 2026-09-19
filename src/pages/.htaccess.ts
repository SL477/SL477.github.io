import robots from '../content/robots.json';

const str = `RewriteEngine on
RewriteBase /

# block "AI" bots
RewriteCond %{HTTP_USER_AGENT} (${robots.join('|')}) [NC]
RewriteRule ^ - [F]`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}