import { Chars } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useEffect, useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import useTransitionContext from '@/context/transitionContext';
import { translateUrl, useRouter } from 'next-translate-routes';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function CharsInOut({
    children,
    durationIn = 0.75, // Reduced from 1.25 to 0.75 for faster animations
    durationOut = 0.25, // Reduced from 0.35 to 0.25 for faster animations
    delay = 0,
    delayOut = 0,
    increment = 0.02, // Reduced from 0.07 to 0.02 for smoother, less staggered animations
    ease,
    easeOut,
    target,
    skipOutro,
    watch = false,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers,
    isLink = false,
    textAlign
}: Chars) {
    const { asPath, locale } = useRouter();
    const { currentRoute, currentLocale } = useNavigationContext();
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);
    const splitText = useRef<SplitText | null>(null);
    const animations = useRef<GSAPTween[]>([]);

    const animate = (localChange: boolean) => {
        // Sjekk at element.current eksisterer før vi bruker ScrollTrigger-funksjoner
        if (!element.current) return;
        
        const isInViewport = ScrollTrigger.isInViewport(element.current);
        const isAboveViewport = ScrollTrigger.positionInViewport(element.current, 'bottom') <= 0;

        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        // Sjekk at målselementet finnes før vi bruker SplitText
        const targetElement = document.querySelector(target);
        if (!targetElement) return;
        
        const splitTextParent = new SplitText(target, {type: 'lines', linesClass: 'split-parent'});
        splitText.current = splitTextParent;

        const lines = splitTextParent.lines;
        const alignProperty = textAlign ? {textAlign: textAlign} : {};
        const tree: GSAPTween[] = [];

        lines.forEach(line => {
            /* Overwrite the default display block */
            if (isLink) {
                gsap.set(line, {display: 'flex'});
            } else {
                gsap.set(line, {display: 'inline-block', ...alignProperty});
            }

            const splitLineChild = new SplitText(line, {type: 'lines, chars', linesClass: 'split-child'});
            const linesChildren = splitLineChild.lines;
            const chars = splitLineChild.chars;

            linesChildren.forEach(lineChild => {
                /* Overwrites the default display block */
                if (isLink) {
                    gsap.set(lineChild, {display: 'inline-block'});
                }

                new SplitText(lineChild, {type: 'lines', linesClass: 'u-overflow--hidden'});
            });

            let initialDelay = delay;
            let initialDelayOut = delayOut + increment * (chars.length - 1);

            /* Animates each char */
            chars.forEach(char => {
                /* Intro animation */
                if (!localChange) {
                    const anim = gsap.fromTo(
                        char,
                        {
                            y: '100%'
                        },
                        {
                            y: 0,
                            willChange: 'transform',
                            ease: ease ?? primaryEase,
                            delay: initialDelay,
                            duration: durationIn,
                            ...scrollTrigger,
                            onComplete: () => {
                                // Restore original text if data-original-text is available
                                const parentEl = document.querySelector(target) as HTMLElement;
                                if (parentEl && parentEl.dataset.originalText) {
                                    // Create a temporary element to preserve formatting
                                    const tempSpan = document.createElement('span');
                                    tempSpan.textContent = parentEl.dataset.originalText;
                                    
                                    // Replace the content while preserving animation state
                                    parentEl.innerHTML = tempSpan.textContent || '';
                                }
                            }
                        }
                    );
                    tree.push(anim);
                    initialDelay += increment;
                } else if (localChange) {
                    if (!isInViewport && !isAboveViewport) {
                        const anim = gsap.fromTo(
                            char,
                            {
                                y: '100%'
                            },
                            {
                                y: 0,
                                willChange: 'transform',
                                ease: ease ?? primaryEase,
                                delay: initialDelay,
                                duration: durationIn,
                                ...scrollTrigger,
                                onComplete: () => {
                                    // Restore original text if data-original-text is available
                                    const parentEl = document.querySelector(target) as HTMLElement;
                                    if (parentEl && parentEl.dataset.originalText) {
                                        // Create a temporary element to preserve formatting
                                        const tempSpan = document.createElement('span');
                                        tempSpan.textContent = parentEl.dataset.originalText;
                                        
                                        // Replace the content while preserving animation state
                                        parentEl.innerHTML = tempSpan.textContent || '';
                                    }
                                }
                            }
                        );
                        tree.push(anim);
                        initialDelay += increment;
                    } else {
                        gsap.set(element.current, {
                            opacity: 1
                        });
                    }
                }

                /* Outro animation */
                if (!skipOutro) {
                    timeline?.add(
                        gsap.to(
                            char,
                            {
                                y: '100%',
                                ease: easeOut ?? primaryEase,
                                delay: initialDelayOut,
                                duration: durationOut
                            }
                        ),
                        0
                    );

                    initialDelayOut -= increment;
                }
            });

            /* Animates underline */
            if (isLink) {
                /* Intro animation */
                if (!localChange) {
                    const linkAnim = gsap.to(line,
                        {
                            '--line-width': '100%',
                            ease: ease ?? primaryEase,
                            delay: initialDelay,
                            duration: durationIn,
                            ...scrollTrigger,
                            onComplete: () => {
                                gsap.to(element.current?.parentElement as HTMLElement,
                                    {
                                        pointerEvents: 'all'
                                    }
                                )
                            }
                        }
                    );
                    tree.push(linkAnim);
                } else if (localChange) {
                    if (!isInViewport && !isAboveViewport) {
                        gsap.set(element.current?.parentElement as HTMLElement, {pointerEvents: 'none'});
                        const linkAnim = gsap.to(line,
                            {
                                '--line-width': '100%',
                                ease: ease ?? primaryEase,
                                delay: initialDelay,
                                duration: durationIn,
                                ...scrollTrigger,
                                onComplete: () => {
                                    gsap.to(element.current?.parentElement as HTMLElement,
                                        {
                                            pointerEvents: 'all'
                                        }
                                    )
                                }
                            }
                        );
                        tree.push(linkAnim);
                    } else {
                        gsap.set(line, {'--line-width': '100%'});
                    }
                }

                /* Outro animation */
                if (!skipOutro) {
                    const linkOutroAnimation = gsap.timeline()
                    .to(element.current?.parentElement!, {
                        pointerEvents: 'none'
                    })
                    .to(line, {
                        '--line-width': 0,
                        ease: easeOut ?? primaryEase,
                        delay: initialDelayOut,
                        duration: durationOut
                    });

                    timeline?.add(
                        linkOutroAnimation,
                        0
                    );
                }
            }
        });

        animations.current = tree;
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animate(false);
            gsap.to(element.current, {
                opacity: 1
            });
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {
            /* Reverts SplitText */
            splitText.current?.revert();

            /* Kills all animations */
            animations.current.forEach(animation => {
                animation.kill();
            });

            setTimeout(() => {
                animate(true);
            }, 0);
        } else if (currentRoute !== translateUrl(asPath, locale ?? '').split('?')[0] && currentLocale === locale) {
            /* Kills all animations */
            animations.current.forEach(animation => {
                animation.kill();
            });
        }
    }, [asPath, locale]);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}