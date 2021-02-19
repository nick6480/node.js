Sample Model Application
========================

Native Node.js. 
Written for teaching and learning purposes.
nml

Bemærk sorterings filerne kunne ikke uploades:

browsere3
<?xml version="1.0" encoding="UTF-8"?>

-<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">


-<xsl:template match="/">


-<html>


-<body>

<h2>My CD Collection</h2>


-<table border="1">


-<tr bgcolor="#9acd32">

<th>Title</th>

<th>Artist</th>

<th>year</th>

</tr>


-<xsl:for-each select="catalog/cd">

<xsl:sort select="title"/>


-<tr>


-<td>

<xsl:value-of select="title"/>

</td>


-<td>

<xsl:value-of select="artist"/>

</td>


-<td>

<xsl:value-of select="year"/>

</td>

</tr>

</xsl:for-each>

</table>

</body>

</html>

</xsl:template>

</xsl:stylesheet>






browsere4

<?xml version="1.0" encoding="UTF-8"?>

-<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">


-<xsl:template match="/">


-<html>


-<body>

<h2>My CD Collection</h2>


-<table border="1">


-<tr bgcolor="#9acd32">

<th>Title</th>

<th>Artist</th>

<th>year</th>

</tr>


-<xsl:for-each select="catalog/cd">

<xsl:sort select="year"/>


-<tr>


-<td>

<xsl:value-of select="title"/>

</td>


-<td>

<xsl:value-of select="artist"/>

</td>


-<td>

<xsl:value-of select="year"/>

</td>

</tr>

</xsl:for-each>

</table>

</body>

</html>

</xsl:template>

</xsl:stylesheet>







