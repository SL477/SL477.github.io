---
title: XSLT Pages
layout: post
tags: Meta Programming
author: Tom Fishwick
image: /assets/images/sitemap.jpg
photo_alt: Sitemap screenshot, showing the links between the pages.
last_modified_at: 2025-03-02
---

I have updated my Sitemap and Atom feeds to display as though they are HTML. Inspired by the idea of not repeating myself, which I wasn't because generally Jekyll had one copy of this data in the source code, but then two copies in the output.

These use the magic of XSLT, which take an XML file and then output another document.

At work I have done this a fair bit using 3ET/EDG (3E Templates/Elite Design Gallery).
But these were transforming XML into PDFs and text files, for bills or bank loads generally.
Very briefly in the EDG training it had touched upon its use on the web of transforming XML into HTML.

For the Sitemap I used a simple loop, sorting the links and displaying as a bullet point list (then the Javascript I used before transforms this ready for the Mermaid library to display a graph).

```xml
<ul id="sitemap-links">
  <xsl:for-each select="sitemap:urlset/sitemap:url">
    <xsl:sort select="sitemap:loc"/>
    <li>
      <a>
        <xsl:attribute name="href">
          <xsl:value-of select="sitemap:loc"/>
        </xsl:attribute>
        <xsl:choose>
          <xsl:when test="contains(sitemap:loc, '{{ site.url }}')">
            <xsl:value-of select="substring-after(sitemap:loc, '{{ site.url }}')"/>
          </xsl:when>
          <xsl:when test="contains(sitemap:loc, '{{ site.site_url }}')">
            <xsl:value-of select="substring-after(sitemap:loc, '{{ site.site_url }}')"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="sitemap:loc"/>
          </xsl:otherwise>
        </xsl:choose>
      </a>
    </li>
  </xsl:for-each>
</ul>
```

The idea of this code was to sort out the links coming through from the other sites, as well as this one.
It uses Jekyll's template tags to put in the site's running URL and its official URL (so that I could test it locally first).

I removed the Jekyll Sitemap Gem, as I wanted to import pages from my other GitHub pages repositories (discovering that my Odin-Project repository was a bit of a mess from me just deleting my copy of Bootstrap, but that and the VueJS now have the new NavBar[^1]) and also because it did not wish to attach to the stylesheet.

For the feed this got a bit more complicated.
I wanted to keep all of the features of the feed.html, which meant marking up in micro-formats.
It also meant making sure that the content came through in HTML.
Plus I'm using XSLT version 1, which makes me grateful that I can use version 2 at work[^2].
It was tempting to get rid of the Jekyll-feed while I was at it, but once I discovered that it could also sort out my notes feed too that spared it!

For my site at least, I have created a new Jekyll layout for XSLT, by making the head, header and footer fully valid XML I can use the same includes for these.

[^1]:
    I prefer React over VueJS, as demonstrated by the amount in the React site compared to the VueJS one.
    I found that VueJS was a bit more confusing due to everything being separated (I know that this site is confusing for the same reason, but most of my layouts and includes I setup once and then never needed to look again at them).

[^2]: With a preprocessor that tells you when you went wrong and roughly where, rather than the browser's dev tools, which is happy to just stop working & let you guess at what went wrong.
