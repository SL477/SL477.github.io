import site from '../content/site.json';
import blogroll from '../content/blogroll.json';

function createOutlines(blogs: { description: string, url: string }[]) {
  return blogs.map(b => `<outline text="${b.description}" description="${b.description}" htmlUrl="${b.url}" language="unknown" title="${b.description}" type="rss" version="RSS2" xmlUrl="${b.url}"/>`);
}

const blogs = blogroll.map(outline => `<outline text="${outline.outline}">${createOutlines(outline.blogs)}</outline>`);

const now = (new Date()).toUTCString();
const str = `<?xml version="1.0" encoding="utf-8"?>
<opml version="2.0">
  <head>
    <title>Blogs I like</title>
      <dateCreated>Sun, 01 Jun 2025 15:44:00 GMT</dateCreated>
      <dateModified>${now}</dateModified>
      <ownerName>${site.author.name}</ownerName>
  </head>
  <body>
    ${blogs}
  </body>
</opml>`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}