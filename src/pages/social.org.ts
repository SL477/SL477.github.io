import site from '../content/site.json';
import { getCollection } from 'astro:content';

const posts = (await getCollection('note')).toSorted(
  (a, b) =>
    new Date(b.id.substring(0, 10)).valueOf() -
    new Date(a.id.substring(0, 10)).valueOf()
).slice(0, 10);

const postsStr = posts.map(post => `**
:PROPERTIES:
:ID: ${post.id.substring(0, 10)}
:LANG: en
:END:

${post.body}`);

const str = `#+TITLE: Tom Fishwick's Blog
#+NICK: Link477
#+DESCRIPTION: ${site.description}
#+AVATAR: ${site.site_url}${site.logo.src}
#+LINK: ${site.site_url}

* Posts
${postsStr.join('\n')}`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}