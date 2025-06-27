"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useWindowSize from "../hooks/useWindowSize";

type AnimatedNameProps = {
    resolvedTheme?: string;
    setTheme: (theme: string) => void;
}

export default function AnimatedName({ resolvedTheme }: AnimatedNameProps) {
    const firstName = "Henrik";
    const lastName = "Talstad";
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const { isMobile } = useWindowSize();

    // Direkte fargevalg basert på tema
    const textColor = resolvedTheme === "dark" ? "#ffffff" : "#ffffff";
    const hoverColor = resolvedTheme === "dark" ? "#fff" : "#222";

    useEffect(() => {
        gsap.fromTo(
            letterRefs.current,
            { y: 12 },
            {
                y: 0,
                stagger: 0.045,
                duration: 0.65,
                ease: "power3.out",
            }
        );
    }, [hoverColor]);

    useEffect(() => {
        letterRefs.current.forEach((el, i) => {
            if (!el) return;
            el.onmouseenter = () => {
                gsap.to(el, {
                    y: -8,
                    color: hoverColor,
                    duration: 0.25,
                    ease: "power1.out",
                });
            };
            el.onmouseleave = () => {
                gsap.to(el, {
                    y: 0,
                    color: textColor, // Bruk eksplisitt farge istedet for inherit
                    duration: 0.3,
                    ease: "power1.inOut",
                });
            };
        });
    }, [hoverColor, textColor]); // Legg til textColor som avhengighet

    // Helper function to create animated letters
    const createAnimatedText = (text: string, startIndex: number) => {
        return text.split("").map((char, i) => (
            <span
                key={`${startIndex + i}`}
                ref={(el) => {
                    letterRefs.current[startIndex + i] = el;
                }}
                style={{
                    display: "inline-block",
                    transition: "color 0.2s",
                    color: textColor,
                }}
            >
                {char}
            </span>
        ));
    };

    return (
        <span
            className="u-text--center"
            style={{
                display: "inline-block",
                fontWeight: 700,
                fontSize: isMobile ? "1rem" : "1.2rem",
                letterSpacing: "0.03em",
                marginLeft: isMobile ? "0.5rem" : "1rem",
                verticalAlign: "middle",
                cursor: "pointer",
                userSelect: "none",
                color: textColor,
            }}
            aria-label="Henrik Talstad"
        >
            <div style={{ 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
            }}>
                <div>{createAnimatedText(firstName, 0)}</div>
                <div style={{ marginLeft: isMobile ? 0 : "0.25rem" }}>
                    {createAnimatedText(lastName, firstName.length)}
                </div>
            </div>
        </span>
    );
}
