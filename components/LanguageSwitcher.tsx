import { LanguageSwitcherProps } from '@/types/components/global';
import { Link, translateUrl } from 'next-translate-routes';

const languageLabels: Record<string, string> = { en: 'EN', no: 'NO' };

export default function LanguageSwitcher({
    router
}: LanguageSwitcherProps) {
    const getLocales = () => {
        const locales = router.locales ?? [];
        return locales.filter(l => l !== router.locale);
    }
    const locales = getLocales();
    const hrefForLocale = (locale: string) => router.route !== '/404' ? translateUrl(router.pathname, locale) : '/';

    return (
        <>
            {locales.map((locale: string) => (
                <Link
                    key={locale}
                    href={hrefForLocale(locale)}
                    locale={locale}
                    scroll={false}
                >
                    {languageLabels[locale] || locale}
                </Link>
            ))}
        </>
    );
};