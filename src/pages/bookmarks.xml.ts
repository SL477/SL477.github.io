import bookmarks from '../content/bookmarks.json';

const bookmarkData = bookmarks.map(bookmark => `<bookmark href="${bookmark.url}">
    <title>${bookmark.name}</title>
</bookmark>`).join('');

const str = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xbel>
<xbel version="1.0">
<folder folded="no">
<title>Useful bookmarks</title>
${bookmarkData}
</folder>
</xbel>`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}