import styles from './ProjectReview.module.css';
import myImage from '/public/assets/purple potato.png'
import Link from 'next/link'
import Image from 'next/image';
import Technology from './technology/Technology';

export default function ProjectReview() {

    return (
        <div className={styles['project-review-container']}>
            <div className={styles['intro-title']}>
                <h2>Project Review</h2>
            </div>
            <div className={styles['project-review-view']}>
                <div className={styles['purple-potato-container']}>
                    <Link href="/project">
                        <div className={styles['purple-potato-view']}>
                            <Image className={styles.pic} src={myImage} alt="My Image"/>
                            <div className={styles['title']}>
                                <h1>我直屬於你</h1>
                            </div>
                            <div className={styles['description']}>
                                <p>海大資工新生直屬抽籤全端系統</p>
                            </div>
                            <Technology/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}