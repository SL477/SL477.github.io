---
layout: xslt
permalink: /sitemap.xsl
---
<h1 class="post-title">Site Map</h1>

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

<pre class="mermaid hidden">
  graph LR
</pre>

<script src="/assets/js/sitemap.js"></script>

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
</script>