import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Apple Touch Icon - Light/Dark mode */}
                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" media="(prefers-color-scheme: light)" />
                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon-dark.png" media="(prefers-color-scheme: dark)" />
                {/* Standard Favicons - Light/Dark mode */}
                <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" media="(prefers-color-scheme: light)" />
                <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
                                {/* Fallback/legacy icons */}
                <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
                {/* Manifest for PWA */}
                <link rel="manifest" href="/static/favicons/site.webmanifest" />
                {/* Microsoft Tiles */}
                <meta name="msapplication-TileColor" content="#e1dfdd" />
                <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
                {/* Theme color for Chrome, Firefox OS and Opera */}
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <a href="#content" className="u-sr-only">Skip to content</a>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}