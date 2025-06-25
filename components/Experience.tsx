import { ExperienceItem, ExperienceProps } from '@/types/components/experience';
import styles from '@/styles/modules/Experience.module.scss';
import classNames from 'classnames';
import FadeInOut from './shared/gsap/FadeInOut';
import LinesInOut from './shared/gsap/LinesInOut';
import CharsInOut from './shared/gsap/CharsInOut';
import { slugify } from '@/utils/string';

export default function Experience({
    index,
    title,
    items
}: ExperienceProps) {
    return (
        <section className={classNames('u-spacing--responsive', styles['c-experience'])}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames('h4', styles['c-experience__index'])}>
                        <FadeInOut
                            watch
                            delay={0.1}
                            durationIn={0.4}
                        >
                            <span id="experience-index">{index}</span>
                        </FadeInOut>
                    </div>
                    <div className={classNames(
                        'u-overflow--hidden',
                        'u-uppercase',
                        styles['c-experience__title']
                    )}>
                        <FadeInOut
                            watch
                            delay={0.15}
                            durationIn={0.4}
                        >
                            <h2 className={classNames('h4', 'u-margin--none')}>
                                {title}
                            </h2>
                        </FadeInOut>
                    </div>
                    <div className={styles['c-experience__content']}>
                        {items.map((item, i) => (
                            <ExperienceCard key={i} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ExperienceCardProps extends ExperienceItem {
    index: number;
}

function ExperienceCard({
    title,
    company,
    period,
    description,
    skills,
    index
}: ExperienceCardProps) {
    const cardId = `experience-card-${index}`;
    return (
        <div className={styles['c-experience__card']}>
            <FadeInOut
                watch
                delay={0.2 + (index * 0.05)} // Reduced from 0.4 + (index * 0.1)
                durationIn={0.4} // Faster animation
            >
            <div className={styles['c-experience__card--header']}>
                <FadeInOut
                    watch
                    delay={0.25 + (index * 0.05)} // Reduced from 0.5
                    durationIn={0.4}
                >
                    <h3 
                        className={classNames('h3', styles['c-experience__card--title'])}
                    >
                        {title}
                    </h3>
                </FadeInOut>
                
                <div className={styles['c-experience__card--meta']}>
                    <FadeInOut
                        watch
                        delay={0.3 + (index * 0.05)} // Reduced from 0.55
                        durationIn={0.4}
                    >
                        <span 
                            className={styles['c-experience__card--company']}
                        >
                            {company}
                        </span>
                    </FadeInOut>
                    
                    <FadeInOut
                        watch
                        delay={0.35 + (index * 0.05)} // Reduced from 0.6
                        durationIn={0.4}
                    >
                        <span 
                            className={styles['c-experience__card--period']}
                        >
                            {period}
                        </span>
                    </FadeInOut>
                </div>
            </div>
            <div className={styles['c-experience__card--description']}>
                {description.map((text, i) => (
                    <FadeInOut
                        key={i}
                        watch
                        delay={0.4 + (index * 0.05) + (i * 0.02)} // Reduced from 0.65
                        durationIn={0.4}
                    >
                        <p>{text}</p>
                    </FadeInOut>
                ))}
            </div>
            {skills && skills.length > 0 && (
                <div className={styles['c-experience__card--skills']}>
                    {skills.map((skill, i) => (
                        <FadeInOut
                            key={i}
                            watch
                            delay={0.45 + (index * 0.05) + (i * 0.01)} // Reduced from 0.7
                            durationIn={0.3}
                        >
                            <span className={styles['c-experience__card--skill']}>{skill}</span>
                        </FadeInOut>
                    ))}
                </div>
            )}
            </FadeInOut>
        </div>
    );
}
