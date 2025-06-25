import { Lang, MetaDataProps } from '@/types/components/global';
import { AboutHeaderProps } from '@/types/components/headers';
import { AboutIntroductionContent } from '@/types/components/introductions';

export const META_ABOUT: Lang<MetaDataProps> = {
    en: {
        title: `About | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    no: {
        title: `Om | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const ABOUT_HEADER: Lang<AboutHeaderProps> = {
    en: {
        titles: ['Passionate', 'Founder &', 'Developer'],
        image: '/static/images/about-header.jpeg',
        imageCredits: 'Photo by Vegard Stien - Raw Studios'
    },
    no: {
        titles: ['Engasjert', 'Gründer &', 'Utvikler'],
        image: '/static/images/about-header.jpeg',
        imageCredits: 'Foto av Vegard Stien - Raw Studios'
    }
};

export const ABOUT_INTRODUCTION: Lang<AboutIntroductionContent> = {
    en: {
        content: [
            'I am a founder and developer with a passion for creating innovative solutions and building exceptional digital experiences. With expertise in a range of technologies, I specialize in developing responsive applications and websites that deliver real value to users. As both an entrepreneur and programmer, I bring a unique perspective that combines technical expertise with business acumen.',
            'I believe in continuous improvement and staying ahead of technological trends. This mindset drives me to explore new frameworks, tools and methodologies that can enhance the quality and functionality of my work. Whether working on client projects or personal ventures, I approach each challenge with enthusiasm and dedication.',
            'My goal is to create digital solutions that not only meet the technical requirements but also exceed expectations in terms of user experience, performance, and business impact. I take pride in delivering code that is clean, maintainable, and scalable.'
        ],
        image: '/static/images/about-portrait.jpg'
    },
    no: {
        content: [
            'Jeg er en gründer og utvikler med lidenskap for å skape innovative løsninger og bygge eksepsjonelle digitale opplevelser. Med ekspertise innen et bredt spekter av teknologier, spesialiserer jeg meg på å utvikle responsive applikasjoner og nettsteder som leverer reell verdi til brukerne. Som både entreprenør og programmerer bringer jeg et unikt perspektiv som kombinerer teknisk ekspertise med forretningsmessig innsikt.',
            'Jeg tror på kontinuerlig forbedring og å holde meg oppdatert på teknologiske trender. Denne tankegangen driver meg til å utforske nye rammeverk, verktøy og metodologier som kan forbedre kvaliteten og funksjonaliteten i arbeidet mitt. Enten jeg jobber med klientprosjekter eller personlige foretak, møter jeg hver utfordring med entusiasme og dedikasjon.',
            'Mitt mål er å skape digitale løsninger som ikke bare oppfyller de tekniske kravene, men også overgår forventningene når det gjelder brukeropplevelse, ytelse og forretningsmessig påvirkning. Jeg er stolt av å levere kode som er ren, vedlikeholdbar og skalerbar.'
        ],
        image: '/static/images/about-portrait.jpg'
    }
};