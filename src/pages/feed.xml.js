import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

function getSlug(id, url) {
    return `${url}${id.split('-')[0]}/${id.split('-')[1]}/${id.split('-')[2]}/${id.substring(11)}`;
  }

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Toms Post Feed',
    description: 'My longer ramblings',
    site: context.site,
    pubDate: Date.now(),
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.id.substring(0, 10),
      link: getSlug(post.id, context.site),
      categories: post.data.tags,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      })
    }))
  });
}