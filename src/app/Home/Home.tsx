import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles['home-description']}>
            <h1>Web Web Web</h1>
            <p>The team website of 2024 web programming in NTOU which led by Ateto</p>
            </div>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    );
}