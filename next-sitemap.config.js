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
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com',
    exclude: ['/api', '/404'], // fjern fr/404
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    changefreq: 'monthly',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: '*',
                disallow: ['/api', '/404', '/fr/404']
            }
        ]
    },
    transform: async (config, path) => {
        // Finn ut hvilket språk denne pathen tilhører
        const locales = nextConfig.i18n.locales;
        const defaultLocale = nextConfig.i18n.defaultLocale;
        const detectedLocale = locales.find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`)) || defaultLocale;
        const basePath = detectedLocale === defaultLocale ? path : path.replace(`/${detectedLocale}`, '');
        // Lag alternateRefs for alle språk
        const alternateRefs = locales.map(locale => ({
            href: translateUrl(basePath, locale),
            hreflang: locale === defaultLocale ? 'x-default' : locale
        }));
        return {
            loc: translateUrl(basePath, detectedLocale),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs
        };
    },
}