import { MetaDataProps } from '@/types/components/global';
import Head from 'next/head';
import useWindowLocation from '@/hooks/useWindowLocation';
import { useRouter } from 'next-translate-routes';
import { getTranslation } from '@/utils/translation';

export default function MetaData({
    ...customMeta
}: MetaDataProps) {
    const { locale } = useRouter();
    const { currentURL } = useWindowLocation();
    const meta: MetaDataProps = {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        description: getTranslation('Entrepreneur, Full stack developer, Engineer - Building innovative solutions and digital experiences.', locale ?? ''),
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image${locale ? `-${locale}`: ''}.png`,
        imageWidth: 1200,
        imageHeight: 630,
        imageAlt: 'Portfolio thumbnail',
        type: 'website',
        author: 'Henrik Talstad',
        keywords: 'Entrepreneur, developer, portfolio, Full-stack web development, artificial intelligence, machine learning, AI',
        locale: locale || 'en',
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        themeColor: '#ffffff',
        publishedAt: null,
        updatedAt: null,
        ...customMeta
    };

    // Prepare JSON-LD structured data
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': meta.type === 'article' ? 'Article' : 'WebSite',
        headline: meta.title,
        description: meta.description,
        ...(meta.image && {
            image: [
                meta.image
            ],
        }),
        ...(meta.type === 'article' && meta.publishedAt && {
            datePublished: meta.publishedAt,
            dateModified: meta.updatedAt || meta.publishedAt
        }),
        ...(meta.author && {
            author: {
                '@type': 'Person',
                name: meta.author
            }
        }),
        ...(meta.siteName && {
            publisher: {
                '@type': 'Organization',
                name: meta.siteName,
                logo: `${process.env.NEXT_PUBLIC_BASE_URL}/static/images/logo.png`
            }
        })
    };

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Basic metadata */}
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            {meta.keywords && <meta name="keywords" content={meta.keywords} />}
            {meta.author && <meta name="author" content={meta.author} />}
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={currentURL} />
            {meta.themeColor && <meta name="theme-color" content={meta.themeColor} />}

            {/* Open Graph tags */}
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:url" content={currentURL} />
            <meta property="og:site_name" content={meta.siteName} />
            <meta property="og:type" content={meta.type} />
            {meta.locale && <meta property="og:locale" content={meta.locale} />}

            {/* Open Graph image tags */}
            {meta.image && (
              <>
                <meta property="og:image" content={meta.image} />
                {meta.imageWidth && <meta property="og:image:width" content={String(meta.imageWidth)} />}
                {meta.imageHeight && <meta property="og:image:height" content={String(meta.imageHeight)} />}
                {meta.imageAlt && <meta property="og:image:alt" content={meta.imageAlt} />}
              </>
            )}

            {/* Article specific metadata */}
            {meta.type === 'article' && (
              <>
                {meta.publishedAt && <meta property="article:published_time" content={meta.publishedAt} />}
                {meta.updatedAt && <meta property="article:modified_time" content={meta.updatedAt} />}
              </>
            )}

            {/* Twitter Card data */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta property="twitter:url" content={currentURL} />
            {meta.image && <meta name="twitter:image" content={meta.image} />}
            {meta.imageAlt && <meta name="twitter:image:alt" content={meta.imageAlt} />}

            {/* Structured data JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </Head>
    );
}