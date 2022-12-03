<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body bgcolor="lightblue">
<h1 align="center">Wildlife Information</h1>
<table border="8" align="center" height="50%" width="50%" >

<tr bgcolor="lightgreen"> 
	<th>Sno</th>
	<th>Species</th>
	<th>Status</th>
	<th>Location</th>
	
</tr>
	<xsl:for-each select="WildlifeInfo/s">
	
<tr>
	<td><xsl:value-of select="Sno"/></td>
	<td><xsl:value-of select="Species"/></td>
	<td><xsl:value-of select="Status"/></td>
	<td><xsl:value-of select="Location"/></td>
	
</tr>
	
	</xsl:for-each>
	
	</table>
</body>
</html>


</xsl:template>


</xsl:stylesheet>
