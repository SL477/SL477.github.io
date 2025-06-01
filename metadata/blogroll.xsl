---
permalink: /blogroll.xsl
layout: xslt
---

<h1 class="post-title">Blogroll</h1>
<ul>
    <xsl:for-each select="opml/body/outline[@text != 'Me']/outline">
        <li><a>
            <xsl:attribute name="href">
                <xsl:value-of select="@htmlUrl" />
            </xsl:attribute>
            <xsl:value-of select="@text" />
        </a></li>
    </xsl:for-each>
</ul>
