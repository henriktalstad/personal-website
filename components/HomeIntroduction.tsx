import { HomeIntroductionProps } from '@/types/components/introductions';
import styles from '@/styles/modules/HomeIntroduction.module.scss';
import Button from './shared/Button';
import LinesInOut from './shared/gsap/LinesInOut';
import FadeInOut from './shared/gsap/FadeInOut';
import CharsInOut from './shared/gsap/CharsInOut';
import classNames from 'classnames';

export default function HomeIntroduction({
    index,
    titles,
    content,
    button
}: HomeIntroductionProps) {
    return(
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-homeIntroduction']
        )}>
            <div className="o-container">
                <div className="o-grid">
                    <div className={classNames(
                        'h4',
                        styles['c-homeIntroduction__index']
                    )}>
                        <CharsInOut
                            target="#intro-index"
                            watch
                            delay={0.2}
                        >
                            <span id="intro-index" data-original-text={index}>
                                {index}
                            </span>
                        </CharsInOut>
                    </div>
                    <div className={classNames(
                        'u-large-text',
                        styles['c-homeIntroduction__title']
                    )}>
                        {titles.map((title, i) => (
                            <CharsInOut
                                key={i}
                                target={`#title-${i}`}
                                watch
                                delay={0.3 + (i * 0.1)}
                            >
                                <div className={classNames({
                                    'o-wysiwyg': i > 0
                                })}>
                                    <p id={`title-${i}`} data-original-text={title}>{title}</p>
                                </div>
                            </CharsInOut>
                        ))}
                    </div>
                    <div className={styles['c-homeIntroduction__content']}>
                        <div className="o-wysiwyg">
                            {content.map((element, i) => (
                                <LinesInOut
                                    key={i}
                                    target={`#content-${i}`}
                                    watch
                                    delay={0.5 + (i * 0.1)}
                                >
                                    <p id={`content-${i}`}>{element}</p>
                                </LinesInOut>
                            ))}
                        </div>
                    </div>
                    <div className={styles['c-homeIntroduction__btn']}>
                        <FadeInOut
                            watch
                            delay={0.7}
                        >
                            <Button {...button} />
                        </FadeInOut>
                    </div>
                </div>
            </div>
        </section>
    );
};