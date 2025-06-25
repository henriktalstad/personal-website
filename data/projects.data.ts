import { Lang, MetaDataProps } from "@/types/components/global";
import { ProjectsTabsType } from "@/types/projects/tabs";
import {
    ProjectProps,
    Projects,
    ProjectsList,
    ProjectsType,
} from "@/types/projects";
import { toTwoDigits } from "@/utils/number";

export const META_PROJECTS: Lang<MetaDataProps> = {
    en: {
        title: `Projects | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    },
    no: {
        title: `Prosjekter | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    },
};

export const PROJECTS: Lang<Projects> = {
    en: [
        {
            title: "Scoped Solutions",
            description:
                "Data-driven property management tool that simplifies sustainability reporting, energy monitoring, and property analytics",
            image: "/static/images/projects/scoped.png",
            url: "https://www.scoped.no/",
            buttonLabel: "Explore Scoped",
        },
        {
            title: "Artigboks",
            description:
                "Equipment rental service for outdoor activities in parks, with easy booking and pickup via app or QR code",
            image: "/static/images/projects/artigboks.png",
            url: "https://www.artigboks.no/",
            buttonLabel: "Book equipment",
        },
        {
            title: "Code Tools",
            description:
                "AI-powered UI design assistant that identifies and fixes design flaws, transforming interfaces into user-friendly experiences",
            image: "/static/images/projects/code-tools.png",
            url: "https://www.codetools.design/",
            buttonLabel: "Improve your UI",
        },
    ],
    no: [
        {
            title: "Scoped Solutions",
            description:
                "Datadrevet eiendomsverktøy som forenkler bærekraftsrapportering, energioppfølging og eiendomsanalyser",
            image: "/static/images/projects/scoped.png",
            url: "https://www.scoped.no/",
            buttonLabel: "Utforsk Scoped",
        },
        {
            title: "Artigboks",
            description:
                "Utleietjeneste for aktivitetsutstyr i parker, med enkel bestilling og henting via app eller QR-kode",
            image: "/static/images/projects/artigboks.png",
            url: "https://www.artigboks.no/",
            buttonLabel: "Bestill utstyr",
        },
        {
            title: "Code Tools",
            description:
                "AI-drevet designassistent som identifiserer og fikser designfeil, og forvandler grensesnitt til brukervennlige opplevelser",
            image: "/static/images/projects/code-tools.png",
            url: "https://www.codetools.design/",
            buttonLabel: "Forbedre ditt UI",
        },
    ],
};

export const PERSONAL_PROJECTS: Lang<Projects> = {
    en: [
        {
            title: "Velvet Pour",
            description:
                "Interactive cocktail website with advanced GSAP animations, featuring dynamic SplitText reveals, parallax scrolling, and scroll-triggered effects",
            image: "/static/images/projects/velvet-pour.png",
            url: "https://gsap-cocktail-gamma.vercel.app/",
            githubUrl: "https://github.com/henriktalstad/gsap-cocktail",
            buttonLabel: "Experience it",
        },
        {
            title: "Portfolio Website",
            description:
                "Professional portfolio showcasing my work and skills, built with Next.js, TypeScript and GSAP animations",
            image: "/static/images/projects/portfolio-en.png",
            githubUrl: "https://github.com/henriktalstad/personal-website",
        },
    ],
    no: [
        {
            title: "Velvet Pour",
            description:
                "Interaktiv cocktail-nettside med avanserte GSAP-animasjoner, dynamiske teksteffekter, parallax-rulling og scrollutløste effekter",
            image: "/static/images/projects/velvet-pour.png",
            url: "https://gsap-cocktail-gamma.vercel.app/",
            githubUrl: "https://github.com/henriktalstad/gsap-cocktail",
            buttonLabel: "Opplev siden",
        },
        {
            title: "Portefølje nettside",
            description:
                "Profesjonell portefølje som viser frem arbeidet og ferdighetene mine, bygget med Next.js, TypeScript og GSAP-animasjoner",
            image: "/static/images/projects/portfolio-no.png",
            githubUrl: "https://github.com/henriktalstad/personal-website",
        },
    ],
};

export const FEATURED_PROJECT: Lang<ProjectProps> = {
    en: {
        title: "Scoped Solutions",
        description:
            "Data-driven property management tool that simplifies sustainability reporting, energy monitoring, and property analytics",
        image: "/static/images/projects/scoped.png",
        url: "https://www.scoped.no/",
        buttonLabel: "Explore Scoped",
        type: ProjectsType.PROJECTS,
    },
    no: {
        title: "Scoped Solutions",
        description:
            "Datadrevet eiendomsverktøy som forenkler bærekraftsrapportering, energioppfølging og eiendomsanalyser",
        image: "/static/images/projects/scoped.png",
        url: "https://www.scoped.no/",
        buttonLabel: "Utforsk Scoped",
        type: ProjectsType.PROJECTS,
    },
};

export const LATEST_PERSONAL_PROJECT: Lang<ProjectProps> = {
    en: {
        title: "Velvet Pour",
        description:
            "Interactive cocktail website with advanced GSAP animations, featuring dynamic SplitText reveals, parallax scrolling, and scroll-triggered effects",
        image: "/static/images/projects/velvet-pour.png",
        url: "https://gsap-cocktail-gamma.vercel.app/",
        githubUrl: "https://github.com/henriktalstad/gsap-cocktail",
        buttonLabel: "Experience it",
        type: ProjectsType.PERSONAL_PROJECTS,
    },
    no: {
        title: "Velvet Pour",
        description: "Interaktiv cocktail-nettside med avanserte GSAP-animasjoner, dynamiske teksteffekter, parallax-rulling og scrollutløste effekter",
        image: "/static/images/projects/velvet-pour.png",
        url: "https://gsap-cocktail-gamma.vercel.app/",
        githubUrl: "https://github.com/henriktalstad/gsap-cocktail",
        buttonLabel: "Opplev siden",
        type: ProjectsType.PERSONAL_PROJECTS,
    },
};

export const TOTAL_PROJECTS = {
    en: PROJECTS["en"].length,
    no: PROJECTS["no"].length,
};

export const TOTAL_PERSONAL_PROJECTS = {
    en: PERSONAL_PROJECTS["en"].length,
    no: PERSONAL_PROJECTS["no"].length,
};

export const PROJECTS_TABS: Lang<ProjectsTabsType> = {
    en: [
        {
            title: "Work",
            description:
                "A selected set of projects I've built on my own or in teams in the last few years.",
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS["en"]),
        },
        {
            title: "Personal",
            description:
                "A selected set of personal projects I'm building as I navigate through ideas and technologies.",
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS["en"]),
        },
    ],
    no: [
        {
            title: "Arbeid",
            description:
                "Et utvalg prosjekter jeg har bygget alene eller i team de siste årene.",
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS["no"]),
        },
        {
            title: "Personlig",
            description:
                "Et utvalg personlige prosjekter jeg lager mens jeg utforsker ideer og teknologi.",
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS["no"]),
        },
    ],
};

export const PROJECTS_LIST: Lang<ProjectsList> = {
    en: {
        [ProjectsType.PROJECTS]: PROJECTS["en"],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS["en"],
    },
    no: {
        [ProjectsType.PROJECTS]: PROJECTS["no"],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS["no"],
    },
};
