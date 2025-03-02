function sitemap_map() {
  const linksUl = document.getElementById('sitemap-links');

  // console.log('sitemap');
  const links = document.querySelectorAll('#sitemap-links > li > a');
  if (links && linksUl) {
    linksUl.className = 'hidden';
    // console.log(links);

    const pageDict = {
      '/': 'Index.html',
    };

    const shownTags = {};

    const preTag = document.querySelector('.mermaid');
    preTag.className = 'mermaid';

    for (const link of links) {
      console.log(link);

      const loc = link.textContent;
      let path = '/';
      let last = '/';
      const split = loc.split('/');
      let cnt = -1;

      for (const s of split) {
        cnt++;
        if (s !== '') {
          path += (path === '/' ? '' : '/') + s;
          if (!pageDict[path]) {
            pageDict[path] = path === '#' ? '<p>#</p>' : path;
            preTag.textContent += `\n    ${last}${!shownTags[last] ? '[' + pageDict[last] + ']' : ''} --> ${path}${!shownTags[path] ? '[' + (s == '#' ? '<p>#</p>' : cnt === split.length - 1 ? '<a href="' + link.getAttribute('href') + '">' + s + '</a>' : s) + ']' : ''}`;
            shownTags[last] = last === '#' ? '<p>#</p>"' : last;
            shownTags[path] = path === '#' ? '<p>#</p>' : path;
          }
          last += (last === '/' ? '' : '/') + s;
        }
      }
    }
  }
}
sitemap_map();
