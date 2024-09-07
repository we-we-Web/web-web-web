"use client";

import tabletStyles from './TitleNameForTablet.module.css';
import styles from './TitleName.module.css';
import Button from './Button';
import Image from 'next/image';
import myImage from '../IMG_8760.jpg';
import React from 'react';

export default function TitleName() {

    const title = `Web Project`;

    const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
        const element = event.currentTarget;

        element.classList.add(styles.isActive);

        element.addEventListener('animationend', () => {

            element.classList.remove(styles.isActive);

        }, { once: true });
    };

    return (
        <div className={styles.title}>
            <div>
                <div className={styles.jumpLetterContainer}>
                    <header className={styles.jumpTitle}>
                        {title.split('').map((letter, index) => (
                            <React.Fragment key={index}>
                                {/* {letter === 'P' ? (
                                    <>
                                        <span className={styles.space} />
                                        <span 
                                            className={styles.jumpTitleAlphabet}
                                            id="special-letter"
                                            onMouseEnter={handleMouseEnter}
                                        >
                                            {letter}
                                        </span>
                                    </>
                                ) : ( */}
                                    <span
                                        className={styles.jumpTitleAlphabet}
                                        id={'special-letter'}
                                        onMouseEnter={handleMouseEnter}
                                    >
                                        {letter}
                                    </span>
                                {/* )} */}
                            </React.Fragment>
                        ))}
                    </header>
                </div>

                <p className={styles.subtitle}>
                    This team website of 2024 web programming in NTOU <wbr/>which led by Ateto
                </p>
                <Button/>
            </div>
            <Image className={styles.pic} src={myImage} alt="My Image"/>
        </div>
    );

}

