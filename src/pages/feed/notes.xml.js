import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("note");
  return rss({
    title: 'Toms Notes Feed',
    description: 'My shorter ramblings',
    site: context.site,
    pubDate: Date.now(),
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.id.substring(0, 10),
      link: `${context.site}${post.id}`,
      categories: post.data.tags,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      })
    }))
  });
}