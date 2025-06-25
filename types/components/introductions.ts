import { ButtonProps } from './button';

/* Home */
export type HomeIntroductionProps = {
    index: string;
} & HomeIntroductionContent;

export type HomeIntroductionContent = {
    index?: string;
    titles: string[];
    content: string[];
    button: ButtonProps;
}

/* About */
export type AboutIntroductionProps = {
    index: string;
} & AboutIntroductionContent;

export type AboutIntroductionContent = {
    content: string[];
    image: string;
}