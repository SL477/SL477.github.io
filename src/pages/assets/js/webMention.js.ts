import fs from 'node:fs';
import site from '../../../content/site.json';

let jsString = fs.readFileSync('./src/scripts/webMentions.js', 'utf8');

jsString += `
/**
 * This is to get the page URL and get the web mentions for a page
 */
function getUrlAndCallWebMentions() {
  const webMentionLink = document.querySelector(".u-uid");
  if (webMentionLink) {
    const link = webMentionLink.getAttribute("href");
    console.log("page url", '${site.site_url}' + link);
    getWebMentions('${site.site_url}' + link);
  }
}`;

export function GET() {
  return new Response(jsString, {
    headers: {
      'Content-Type': 'application/javascript'
    }
  });
}