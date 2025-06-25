import { ProjectProps } from '../projects';
import { ButtonProps } from './button';

/* Home */
export type HomeFeaturedProjectProps = {
    index: string;
    project: ProjectProps;
} & HomeFeaturedProjectContent;

export type HomeFeaturedProjectContent = {
    index?: string;
    title: string;
    button: ButtonProps;
}