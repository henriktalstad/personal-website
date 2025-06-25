import { Lang } from '@/types/components/global';
import { Models } from '@/types/hobbies/models';
import { HobbiesTabsContent } from '@/types/hobbies/tabs';
import Soccer from '@/components/models/Soccer';
import Headphone from '@/components/models/Headphone';
import Helmet from '@/components/models/Helmet';

export const MODELS: Models = [Soccer, Headphone, Helmet];

export const HOBBIES_TABS: Lang<HobbiesTabsContent> = {
    en: {
        title: 'Personal interests',
        tabs: [
            {
                id: 0,
                title: 'Sports',
                description: 'Football is my favorite sport. I also enjoy hiking and being in nature. Previously, I was actively involved in football, biathlon, and cross-country skiing.'
            },
            {
                id: 1,
                title: 'Music',
                description: 'I enjoy most genres, with a special love for Norwegian music and electronic music. I like to listen to music while working and during travels.'
            },
            {
                id: 2,
                title: 'TV Series',
                description: 'I love watching new TV series. They give me great experiences, inspiration, and sometimes new learnings. Some previous favorites include Game of Thrones, Prison Break, and Rick and Morty.'
            }
        ]
    },
    no: {
        title: 'Personlige interesser',
        tabs: [
            {
                id: 0,
                title: 'Sport',
                description: 'Fotball er favoritten, elsker tur og natur. Tidligere drevet aktivt med fotball, skiskyting og langrenn.'
            },
            {
                id: 1,
                title: 'Musikk',
                description: 'Jeg liker de fleste sjangre, med en spesiell kjærlighet for norsk musikk og elektronika. Jeg liker å høre på musikk mens jeg jobber og under reiser.'
            },
            {
                id: 2,
                title: 'TV-serier',
                description: 'Jeg elsker å se nye TV-serier. Det gir meg gode opplevelser, inspirasjon og noen ganger ny læring. Noen tidligere favoritter er Game of Thrones, Prison Break og Rick and Morty.'
            }
        ]
    }
};