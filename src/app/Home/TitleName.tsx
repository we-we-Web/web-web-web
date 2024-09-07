"use client";

import styles from './TitleName.module.css';
import Button from './Button';
import Image from 'next/image';
import myImage from '../logo.jpg';
import React, { useRef } from 'react';

export default function TitleName() {

    const title = `Web Project`;

    const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

    const handleMouseEnter = (index: number) => {
        const element = letterRefs.current[index];

        if (element) {
            element.classList.add(styles.isActive);

            element.addEventListener('animationend', () => {
                element.classList.remove(styles.isActive);
            }, { once: true });
        }
    };

    return (
        <div className={styles.title}>
            <div>
                <div className={styles.jumpLetterContainer}>
                    <header className={styles.jumpTitle}>
                        {Array.from(title).map((letter, index) => (
                            <React.Fragment key={index}>
                                <span
                                    ref={(el) => {
                                        letterRefs.current[index] = el;
                                    }}
                                    className={styles.jumpTitleAlphabet}
                                    id={'special-letter'}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    {letter === ' ' ? '\u00A0' : letter}
                                </span>
                            </React.Fragment>
                        ))}
                    </header>
                </div>

                <p className={styles.subtitle}>
                    This team website of 2024 web programming in NTOU <wbr />which led by Ateto
                </p>
                <Button />
            </div>
            <Image className={styles.pic} src={myImage} alt="My Image" />
        </div>
    );
}