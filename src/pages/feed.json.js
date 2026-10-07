import site from '../content/site.json';
import { getCollection } from 'astro:content';
import { getSlug } from '../scripts/posts';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
});

const posts = (await getCollection('blog')).toSorted(
  (a, b) =>
    new Date(b.id.substring(0, 10)).valueOf() -
    new Date(a.id.substring(0, 10)).valueOf()
).slice(0, 10);


export function GET() {
  return new Response(JSON.stringify({
    "version": "https://jsonfeed.org/version/1",
    "title": "Link477 JSON Feed",
    "icon": site.logo.src,
    "home_page_url": site.site_url,
    "feed_url": `${site.site_url}/feed.json`,
    "favicon": site.logo.src,
    "description": site.description,
    "user_comment": "My JSON feed",
    "authors": [
      {
        "name": site.title,
        "url": site.site_url,
        "avatar": site.photo
      }
    ],
    "language": "en-GB",
    "items": posts.map(post => {
      const postData = {
        "id": `${site.site_url}/${getSlug(post.id)}`,
        "title": post.data.title,
        "content_html": parser.render(post.body ?? ''),
        "content_text": post.body,
        "date_published": post.id.substring(0, 10),
        "date_modified": post.data.last_modified_at.toISOString().split('T')[0] ?? post.id.substring(0, 10),
        "authors": [{ "name": post.data.author ?? site.author.name }],
        "url": `${site.site_url}/${getSlug(post.id)}`,
        "summary": post.data.excerpt,
        "language": "en-GB",
        "tags": post.data.tags
      };
      if (post.data.image) {
        postData["image"] = post.data.image.path
      }
      return postData;
    })
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
