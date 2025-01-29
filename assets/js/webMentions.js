---
layout: none
---

/**
 * Fetch the web mentions for a page
 * @param {string} pageUrl
 */
function getWebMentions(pageUrl) {
  fetch(`https://webmention.io/api/mentions.jf2?target=${pageUrl}`)
    .then((res) => res.json())
    .then((res) => {console.log(res, pageUrl); fillWebMentionComments(res);})
    .catch((ex) => console.error(ex));
}

/**
 * This is to get the page URL and get the web mentions for a page
 */
function getUrlAndCallWebMentions() {
    const webMentionLink = document.querySelector(".u-uid");
    if (webMentionLink) {
        const link = webMentionLink.getAttribute("href");
        console.log("page url", `{{ site.site_url }}${link}`);
        getWebMentions(`{{ site.site_url }}${link}`);
    }
}

/**
 * Fill in the web mention comments
 * @param { {type: string, name: string, children: [{type: string, author: {type: string, name: string, url: string, photo: string}, url: string, published: Date, "wm-received": Date, "wm-id": number,
 * content: {text: string, html: string}, "mention-of": string, "wm-property": string, "wm-private": Boolean}]} } webMentionData 
 */
function fillWebMentionComments(webMentionData) {
    const numComments = webMentionData.children.length;
    const commentsDiv = document.getElementById('comments');
    if (numComments > 0 && commentsDiv) {
        const commentsHtml = webMentionData.children.filter(c => !c["wm-private"]).map(c => `<div><a href="${c.author.url}"><img src="${c.author.photo}" width="32" height="32" alt="${c.author.name}"></a> ${c.author.name} - <a href="${c.url}" target="_blank" rel="noreferrer noopener">Original Post</a> - <time datetime="${c.published}">
            ${(new Date(c.published)).toLocaleDateString()}</time><br>${c.content.text}</div>`).join();
        commentsDiv.innerHTML = `<h2>Comments</h2><p>Number of comments: ${numComments}</p>${commentsHtml}`;
    }
}

getUrlAndCallWebMentions();
