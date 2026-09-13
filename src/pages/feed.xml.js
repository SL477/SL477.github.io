import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import site from '../content/site.json';

const parser = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
});

function formatOffset(offsetMinutes) {
  const sign = offsetMinutes <= 0 ? '+' : '-';
  const abs = Math.abs(offsetMinutes);
  const hh = String(Math.floor(abs / 60)).padStart(2, '0');
  const mm = String(abs % 60).padStart(2, '0');
  return `${sign}${hh}:${mm}`;
}

function formatDate(dt) {
  return dt.toISOString()
  .replace(/\.\d{3}Z$/, 'Z')          // drop milliseconds if you don’t want them
  .replace(/Z$/, `${formatOffset(now.getTimezoneOffset())}`);
}

const now = new Date();
const isoLocal = formatDate(now)

const posts = (await getCollection('blog')).toSorted(
  (a, b) =>
    new Date(b.id.substring(0, 10)).valueOf() -
    new Date(a.id.substring(0, 10)).valueOf()
);

function getSlug(id, url) {
  return `${url}/${id.split('-')[0]}/${id.split('-')[1]}/${id.split('-')[2]}/${id.substring(11)}`;
}

function getPostImage(post) {
  if (!post.image) return '';
  return `<figure>
  <img src="${site.site_url}/${post.image.path}" alt="${post.image.alt}" class="u-photo" height="${post.image.height}" width="${post.image.width}" />
  <figcaption><em>${post.photo_caption ?? post.image.alt}</em></figcaption>
</figure>`;
}

function getPostTags(post) {
  if (!post.tags) return '';
  const postTags = post.tags.map(tag => `<category term="${tag}" />`);
  return postTags.join('\n');
}

function getPostImages(post) {
  if (!post.image) return '';
  return `<media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${site.site_url}/${post.image.path}" />
<media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${site.site_url}/${post.image.path}" />`;
}

const postXml = posts.map(post => `<entry xml:lang="${ post.data.lang ?? site.lang}">
  <title type="html">${post.data.title}</title>
  <link href="${getSlug(post.id, site.site_url)}" rel="alternate" type="text/html" title="${post.data.title}}" />
  <id>${getSlug(post.id, site.site_url)}</id>
  <published>${post.id.substring(0, 10)}</published>
  <updated>${formatDate(post.data.last_modified_at).split('T')[0] ?? post.id.substring(0, 10)}</updated>
  <summary type="html">${(post.data.excerpt ?? '').replace(/<[^>]*>?/gm, '')}</summary>
  <content type="xhtml" xml:base="${getSlug(post.id, site.site_url)}">
  <div xmlns="http://www.w3.org/1999/xhtml">
  ${getPostImage(post)}
  ${parser.render(post.body)}
  </div>
  </content>
  <author>
    <name>${site.author.name}</name>
    <uri>${site.author.uri}</uri>
  </author>${getPostTags(post)}${getPostImages(post)}
</entry>`);

const xmlString = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${site.lang}">
  <generator uri="${site.site_url}" version="1.0.0">Link477</generator>
  <link href="${site.site_url}/feed.xml" rel="self" type="application/atom+xml" />
  <link href="${site.site_url}" rel="alternate" type="text/html" hreflang="${site.lang}"/>
  <updated>${isoLocal}</updated>
  <id>${site.site_url}/feed.xml</id>
  <title>Toms Post Feed</title>
  <subtitle>My longer ramblings</subtitle>
  <icon>${site.logo.src}</icon>
  <author>
    <name>${site.author.name}</name>
    <uri>${site.author.uri}</uri>
  </author>
${postXml.join('\n')}
</feed>`;

export async function GET() {
  return new Response(xmlString, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}