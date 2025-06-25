import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from './projects.data';
import { Lang } from '@/types/components/global';
import { HomeHeaderProps } from '@/types/components/headers';
import { HomeIntroductionContent } from '@/types/components/introductions';
import { HomeFeaturedProjectContent } from '@/types/components/sections';

export const HOME_HEADER: Lang<HomeHeaderProps> = {
    en: {
        titles: ['Founder &', 'Developer'],
        subfield: 'Full stack capable',
        image: '/static/images/home-portrait.jpeg',
        content: 'Maker of things with passion and excellence',
        name: ['Henrik', 'Talstad']
    },
    no: {
        titles: ['Gründer &', 'Utvikler'],
        subfield: 'Fullstack-kompetanse',
        image: '/static/images/home-portrait.jpeg',
        content: 'Skaper ting med lidenskap og kvalitet',
        name: ['Henrik', 'Talstad']
    }
};

export const HOME_INTRODUCTION: Lang<HomeIntroductionContent> = {
    en: {
        index: '01 About me',
        titles: [
            'MSc. graduate from NTNU School of Entrepreneurship with background in Cybernetics and Robotics engineering.',
            'Currently CEO at Scoped Solutions, where I combine my technical skills with business development to create innovative solutions.'
        ],
        content: [
            'I love working on innovative projects on my own or with ambitious people, always with a focus on creating value through technology.',
        ],
        button: {
            label: 'More about me',
            href: '/about'
        }
    },
    no: {
        index: '01 Om meg',
        titles: [
            'Sivilingeniør & Mastergrad fra NTNUs Entreprenørskole med bakgrunn fra Kybernetikk og Robotikk.',
            'For tiden Daglig leder i Scoped Solutions, hvor jeg kombinerer mine tekniske ferdigheter med forretningsutvikling for å skape innovative løsninger.'
        ],
        content: [
            'Jeg elsker å jobbe med innovative prosjekter, enten alene eller sammen med ambisiøse mennesker, alltid med fokus på å skape verdi gjennom teknologi.'
        ],
        button: {
            label: 'Mer om meg',
            href: '/about'
        }
    }
};

export const HOME_FEATURED_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        index: '02',
        title: 'Featured work',
        button: {
            label: 'See all projects',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['en'].type
                }
            }
        }
    },
    no: {
        index: '02',
        title: 'Utvalgt arbeid',
        button: {
            label: 'Se alle prosjekter',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['no']?.type
                }
            }
        }
    }
};

export const HOME_LATEST_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        index: '03',
        title: 'Latest personal project',
        button: {
            label: 'See all personal projects',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['en'].type
                }
            }
        }
    },
    no: {
        index: '03',
        title: 'Siste personlige prosjekt',
        button: {
            label: 'Se alle personlige prosjekter',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['no']?.type
                }
            }
        }
    }
};