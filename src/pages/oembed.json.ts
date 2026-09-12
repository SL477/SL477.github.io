import site from '../content/site.json';
export function GET() {
  return new Response(JSON.stringify({
    version: "1.0",
    type: "photo",
    width: site.logo.width,
    height: site.logo.height,
    title: "Link477",
    url: `${site.site_url}${site.logo.src}`,
    author_name: "Tom Fishwick",
    author_url: site.site_url,
    provider_name: "Link477",
    provider_url: site.site_url
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
