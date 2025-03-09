---
layout: none
---

const urlParams = new URLSearchParams(window.location.search);
console.log('urlParams', urlParams);
console.log('q', urlParams.get('q'));
console.log('tag', urlParams.get('tag'));
console.log('posts', urlParams.get('posts'));
console.log('notes', urlParams.get('notes'));
console.log('pages', urlParams.get('pages'));

const allUnticked =
  urlParams.get('posts') || urlParams.get('notes') || urlParams.get('pages');

const searchCtrl = document.getElementById('search');
if (searchCtrl) {
  searchCtrl.value = urlParams.get('q');
}
const tagsCtrl = document.getElementById('tag');
if (tagsCtrl) {
  tagsCtrl.value = urlParams.get('tag');
}
const postCtrl = document.getElementById('posts');
if (postCtrl) {
  postCtrl.checked = urlParams.get('posts') || !allUnticked ? true : false;
}
const noteCtrl = document.getElementById('notes');
if (noteCtrl) {
  noteCtrl.checked = urlParams.get('notes') || !allUnticked ? true : false;
}
const pageCtrl = document.getElementById('pages');
if (pageCtrl) {
  pageCtrl.checked = urlParams.get('pages') || !allUnticked ? true : false;
}

const resultsCtrl = document.getElementById('results');

if (urlParams.get('posts') || !allUnticked) {
  fetch('/feed.json')
    .then((res) => res.json())
    .then((posts) => filterItems(posts))
    .then((posts) => displayItems(posts))
    .catch((ex) => console.error('posts search error', ex));
}

if (urlParams.get('notes') || !allUnticked) {
  fetch('/feed/notes.json')
    .then((res) => res.json())
    .then((posts) => filterItems(posts))
    .then((posts) => displayItems(posts))
    .catch((ex) => console.error('notes search error', ex));
}

if (urlParams.get('pages') || !allUnticked) {
  fetch('/feed/pages.json')
    .then((res) => res.json())
    .then((posts) => filterItems(posts))
    .then((posts) => displayItems(posts))
    .catch((ex) => console.error('pages search error', ex));
}

/**
 * Filter the feed items
 * @param {Feed} feed
 * @returns {[Item]}
 */
function filterItems(feed) {
  let ret = feed.items;
  if (urlParams.get('tag')) {
    ret = ret.filter((i) => i.tags && i.tags.includes(urlParams.get('tag')));
  }
  if (urlParams.get('q')) {
    ret = ret.filter((i) => i.content_text.includes(urlParams.get('q')));
  }
  return ret;
}

/**
 * Display the results of the search
 * @param {[Item]} items
 */
function displayItems(items) {
  if (resultsCtrl && items.length > 0) {
    if (resultsCtrl.childElementCount > 0) {
      const hrElement = document.createElement('hr');
      resultsCtrl.lastChild.appendChild(hrElement);
    }

    let idx = 0;
    for (const item of items) {
      idx++;

      let author = '';
      if (item.authors.length > 0) {
        author = ` • <span itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><span class="p-author h-card" href="{{ site.site_url }}" itemprop="name">${item.authors[0].name}</span></span>`;
      }

      let category = '';
      if (item.tags && item.tags.length > 0) {
        category = '<span>• Tags: </span>';
        for (const t of item.tags) {
          category += `<span class="p-category" data-tag="${t}">${t}</span>`;
        }
      }

      let img = '';
      if (item.image) {
        img = `<img class="u-photo" src="${item.image}" />`;
      }

      let hr = '';
      if (idx < items.length) {
        hr = '<hr/>';
      }
      let dt = '';
      if (item.date_published) {
        dt = item.date_published;
      }
      else if (item.date_modified) {
        dt = item.date_modified;
      }
      else {
        dt = new Date().toISOString();
      }

      const hItem = document.createElement('li');
      hItem.className = 'h-entry li-no-decoration';
      hItem.innerHTML = `<header class="post-header">
          <h2 class="post-title p-name" itemprop="name headline">${item.title}</h2>
          <p class="post-meta">
            <time class="dt-published" itemprop="datePublished" datetime="${dt}">${date_to_string(dt)}</time>
            ${author}${category}<data class="p-summary" hidden="hidden">${item.summary}</data>${img}
          </p>
      </header>
      <div class="post-content e-content" itemprop="articleBody">${item.content_html}</div>
      <a class="u-url u-uid" hidden href="${item.url}">${item.title}</a>${hr}`;

      resultsCtrl.appendChild(hItem);
    }
  }
}

/** return a date in 2021-08-17T00:00:00+01:00 in MMM dd, yyyy format
 * @param {string} dt 
 * @returns {string}
 */
function date_to_string(dt) {
  const monthPicker = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  };
  return `${monthPicker[dt.substring(5,7)]} ${dt.substring(8,10).startsWith('0')? dt.substring(8,9): dt.substring(8,10)}, ${dt.substring(0, 4)}`
}

class Feed {
  /**
   * @param {string} version
   * @param {string} title
   * @param {string} icon
   * @param {string} home_page_url
   * @param {string} feed_url
   * @param {string} favicon
   * @param {string} description
   * @param {string} user_comment
   * @param {[Author]} authors
   * @param {string} language
   * @param {[Item]} items
   */
  constructor(
    version,
    title,
    icon,
    home_page_url,
    feed_url,
    favicon,
    description,
    user_comment,
    authors,
    language,
    items
  ) {
    this.version = version;
    this.title = title;
    this.icon = icon;
    this.home_page_url = home_page_url;
    this.feed_url = feed_url;
    this.favicon = favicon;
    this.description = description;
    this.user_comment = user_comment;
    this.authors = authors;
    this.language = language;
    this.items = items;
  }
}

class Author {
  /**
   * @param {string} name
   * @param {string} url
   * @param {string} avatar
   */
  constructor(name, url, avatar) {
    this.name = name;
    this.url = url;
    this.avatar = avatar;
  }
}

class Item {
  /**
   * @param {string} id
   * @param {string} title
   * @param {string} content_html
   * @param {string} content_text
   * @param {string} date_published
   * @param {string} date_modified
   * @param {[Author]} authors
   * @param {string} url
   * @param {string} summary
   * @param {string} language
   * @param {[string]} tags
   * @param {string | undefined} image
   */
  constructor(
    id,
    title,
    content_html,
    content_text,
    date_published,
    date_modified,
    authors,
    url,
    summary,
    language,
    tags,
    image
  ) {
    this.id = id;
    this.title = title;
    this.content_html = content_html;
    this.content_text = content_text;
    this.date_published = date_published;
    this.date_modified = date_modified;
    this.authors = authors;
    this.url = url;
    this.summary = summary;
    this.language = language;
    this.tags = tags;
    this.image = image;
  }
}
