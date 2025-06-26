/** @type {import('next-sitemap').IConfig} */
const path = require('path');
const { translateUrl } = require('next-translate-routes');
const { createNtrData } = require('next-translate-routes/plugin');
const nextConfig = require('./next.config');

const data = createNtrData(
    nextConfig,
    path.resolve(process.cwd(), './pages')
);

global.__NEXT_TRANSLATE_ROUTES_DATA = data;

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.henriktalstad.com',
    exclude: ['/api', '/404'], // exclude 404 pages
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.7,
    autoLastmod: false, // Set to false to use our custom lastmod
    sitemapSize: 7000,
    formatDate: 'yyyy-MM-dd',
    spacing: '  ', // Standard indentation
    xslUrl: 'sitemap.xsl',
    outDir: 'public',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: '*',
                disallow: ['/api', '/404', '/no/404']
            }
        ]
    },
    transform: async (config, path) => {
        // Determine which language this path belongs to
        const locales = nextConfig.i18n.locales;
        const defaultLocale = nextConfig.i18n.defaultLocale;
        const detectedLocale = locales.find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`)) || defaultLocale;
        const basePath = detectedLocale === defaultLocale ? path : path.replace(`/${detectedLocale}`, '');

        // Create alternateRefs for all languages
        const alternateRefs = locales.map(locale => ({
            href: `${config.siteUrl}${translateUrl(basePath, locale)}`,
            hreflang: locale === defaultLocale ? 'x-default' : locale
        }));

        // Format the date properly for XML sitemap (use ISO format)
        const now = new Date();
        const formattedDate = now.toISOString();

        // Make sure we return a properly structured sitemap entry
        return {
            loc: `${config.siteUrl}${translateUrl(basePath, detectedLocale)}`,
            lastmod: formattedDate,
            changefreq: config.changefreq,
            priority: config.priority,
            alternateRefs
        };
    },
}