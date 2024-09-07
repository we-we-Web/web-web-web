import styles from './page.module.css';
import Tag from './skillTag';

export default function Project() {
    
    const skills = [
        'React (Vite)',
        'Go (Gin)',
        'Node.js (Express.js)',
        'PostgreSQL',
        'MongoDB',
        'Redis',
    ];

    return (
        <div className={styles['potato-view']}>
            <div className={styles['potato-title']}>
                <header>我直屬於你</header>
                <h1>海大資工新生直屬抽籤全端系統</h1>
                <div className={styles['potato-skills']}>
                    {skills.map((skill, index) => (
                        <Tag key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}