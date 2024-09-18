import styles from './ProjectReview.module.css';
import myImage from '/public/assets/purple potato.png'
import Link from 'next/link'
import Image from 'next/image';
import Tag from '../../project/skillTag/SkillTag';

export default function ProjectReview() {

    const colors = ['#B7B7BD', '#D4B8B4', '#ADAAA5', '#CCD2CC', '#C09D9B', '#DBD4C6'];

    const technologies = [        
        'React(Vite)',
        'Go(Gin)',
        'Node (Express)',
        'MongoDB',
        'Redis',
        'PostgreSQL'
    ];


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
                            <div className={styles['technology-container']}>
                                {technologies.map((tech, index) => (
                                    <Tag key={index} skill={tech} color={colors[index]}/>
                                ))}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}