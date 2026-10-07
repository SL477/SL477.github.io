import site from '../content/site.json';

const str = `<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>Link477 Search</ShortName>
  <Description>Internal site search for Link477</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">${site.site_url}/favicon.ico</Image>
  <Url type="text/html" method="get" template="${site.site_url}/search?q={searchTerms}"/>
  <moz:SearchForm>${site.site_url}/search</moz:SearchForm>
</OpenSearchDescription>`;

export function GET() {
  return new Response(str, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
