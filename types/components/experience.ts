import type { Lang } from './global';

export { Lang };

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
    skills?: string[];
}

export interface ExperienceProps {
    index: string;
    title: string;
    items: ExperienceItem[];
}

export type ExperienceContent = {
    title: string;
    index?: string;
    items: ExperienceItem[];
};
