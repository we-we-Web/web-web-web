import styles from './ProjectReview.module.css';
import myImage from '../purple potato.png'
import Link from 'next/link'
import Image from 'next/image';
import Technology from './Technology';

export default function ProjectReview() {

    return (
        <div className={styles.projectReviewContainer}>
            <div className={styles.introTitle}>
                <h2>Project Review</h2>
            </div>
            <div className={styles.projectReviewView}>
                <div className={styles.purplePotatoContainer}>
                    <Link href="/project">
                        <div className={styles.purplePotatoView}>
                            <Image className={styles.pic} src={myImage} alt="My Image"/>
                            <div className={styles.title}>
                                <h1>我直屬於你</h1>
                            </div>
                            <div className={styles.description}>
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