---
permalink: /bookmarks.xsl
layout: xslt
---

<h1 class="post-title">
    <xsl:value-of select="xbel/folder/title" />
</h1>
<ul>
    <xsl:for-each select="xbel/folder/bookmark">
        <xsl:variable name="bookmark" select="."/>
        <li>
            <a target="_blank" rel="noopener noreferrer">
                <xsl:attribute name="href">
                    <xsl:value-of select="$bookmark/@href"/>
                </xsl:attribute>
                <xsl:value-of select="$bookmark/title"/>
            </a>
        </li>
    </xsl:for-each>
</ul>