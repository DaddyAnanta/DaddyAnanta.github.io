<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
            /* --- TOKYO NIGHT THEME --- */
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                margin: 0;
                background-color: #1a1b26; /* Warna latar utama (Tokyo Night background) */
                color: #a9b1d6; /* Warna teks utama (Tokyo Night foreground) */
                font-size: 14px; /* Ukuran font diperkecil */
            }

            a {
                color: #7aa2f7; /* Aksen biru */
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }
            
            .container {
                max-width: 1100px;
                margin: 2.5rem auto;
                background-color: #24283b; /* Warna latar container */
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
                border: 1px solid #414868; /* Border untuk kontras */
            }

            .header {
                padding: 1.5rem 2rem;
                border-bottom: 1px solid #414868;
            }

            h1 {
                font-size: 1.25rem; /* Ukuran H1 diperkecil */
                font-weight: 600;
                margin: 0;
                color: #c0caf5; /* Warna teks header */
            }

            .header p {
                margin: 0.5rem 0 0;
                color: #a9b1d6;
                font-size: 0.85rem; /* Ukuran sub-header diperkecil */
            }
            
            .sitemap-table {
                width: 100%;
                border-collapse: collapse;
            }

            th, td {
                padding: 0.85rem 2rem; /* Padding vertikal diperkecil */
                text-align: left;
                border-bottom: 1px solid #414868;
            }

            th {
                font-size: 0.7rem;
                font-weight: 600;
                color: #a9b1d6;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                background-color: #292e42;
            }

            tbody tr:last-child td {
                border-bottom: none;
            }
            
            tbody tr:hover {
                background-color: #292e42;
            }

            td a {
                font-weight: 500;
                word-break: break-all;
            }

            .col-images, .col-lastmod {
                white-space: nowrap;
                width: 1%;
            }

            .col-images {
                text-align: center;
                color: #e0af68; /* Aksen oranye/kuning */
            }
            .col-lastmod {
               color: #9ece6a; /* Aksen hijau */
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>XML Sitemap</h1>
                <p>Peta situs ini berisi daftar URL yang ditujukan untuk mesin pencari seperti Google.</p>
            </div>
            <table class="sitemap-table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th class="col-images">Gambar</th>
                        <th class="col-lastmod">Terakhir Diperbarui</th>
                    </tr>
                </thead>
                <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                        <td>
                            <xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                            <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                        </td>
                        <td class="col-images">
                            <xsl:value-of select="count(image:image)"/>
                        </td>
                        <td class="col-lastmod">
                            <xsl:value-of select="concat(substring(sitemap:lastmod,0,11), ' ', substring(sitemap:lastmod,12,8))"/>
                        </td>
                    </tr>
                </xsl:for-each>
                </tbody>
            </table>
        </div>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>