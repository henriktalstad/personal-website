import {
    HOME_FEATURED_PROJECT_CONTENT,
    HOME_HEADER,
    HOME_INTRODUCTION,
    HOME_LATEST_PROJECT_CONTENT,
} from "@/data/home.data";
import {
    FEATURED_PROJECT,
    FEATURED_PROJECT_2,
    LATEST_PERSONAL_PROJECT,
} from "@/data/projects.data";
import { CALL_TO_ACTION } from "@/data/global.data";
import { EXPERIENCE } from "@/data/experience.data";
import { CallToActionContent } from "@/types/components/global";
import { HomeHeaderProps } from "@/types/components/headers";
import { HomeIntroductionContent } from "@/types/components/introductions";
import { ExperienceContent } from "@/types/components/experience";
import { HomeFeaturedProjectContent } from "@/types/components/sections";
import { ProjectProps } from "@/types/projects";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import HomeHeader from "@/components/HomeHeader";
import HomeIntroduction from "@/components/HomeIntroduction";
import HomeFeaturedProject from "@/components/HomeFeaturedProject";
import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";

export default function Home({
    homeHeader,
    homeIntroduction,
    experience,
    homeFeaturedProjectContent,
    featuredProject,
    featuredProject2,
    homeLatestProjectContent,
    latestPersonalProject,
    callToAction,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <HomeHeader {...homeHeader} />
            <HomeIntroduction index="01" {...homeIntroduction} />
            <Experience
                index="02"
                title={experience.title}
                items={experience.items}
            />
            <HomeFeaturedProject
                {...homeFeaturedProjectContent}
                index="03"
                project={featuredProject}
            />
            <HomeFeaturedProject
                {...homeFeaturedProjectContent}
                index="04"
                project={featuredProject2}
            />
            <HomeFeaturedProject
                {...homeLatestProjectContent}
                index="05"
                project={latestPersonalProject}
            />
            <CallToAction index="06" {...callToAction} />
        </>
    );
}

export const getStaticProps: GetStaticProps<{
    homeHeader: HomeHeaderProps;
    homeIntroduction: HomeIntroductionContent;
    experience: ExperienceContent;
    homeFeaturedProjectContent: HomeFeaturedProjectContent;
    featuredProject: ProjectProps;
    featuredProject2: ProjectProps;
    homeLatestProjectContent: HomeFeaturedProjectContent;
    latestPersonalProject: ProjectProps;
    callToAction: CallToActionContent;
}> = async ({ locale }) => {
    const lang = locale ?? "";
    const homeHeader = HOME_HEADER[lang];
    const homeIntroduction = HOME_INTRODUCTION[lang];
    const experience = EXPERIENCE[lang];
    const homeFeaturedProjectContent = HOME_FEATURED_PROJECT_CONTENT[lang];
    const featuredProject = FEATURED_PROJECT[lang];
    const homeLatestProjectContent = HOME_LATEST_PROJECT_CONTENT[lang];
    const latestPersonalProject = LATEST_PERSONAL_PROJECT[lang];
    const featuredProject2 = FEATURED_PROJECT_2[lang];
    const callToAction = CALL_TO_ACTION[lang];

    return {
        props: {
            homeHeader,
            homeIntroduction,
            experience,
            homeFeaturedProjectContent,
            featuredProject,
            featuredProject2,
            homeLatestProjectContent,
            latestPersonalProject,
            callToAction,
        },
    };
};
