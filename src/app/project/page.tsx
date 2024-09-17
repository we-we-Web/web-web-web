import styles from './page.module.css';
import Tag from './skillTag/SkillTag';

export default function Project() {
    const colors = ['#B7B7BD', '#D4B8B4', '#ADAAA5', '#CCD2CC', '#C09D9B', '#DBD4C6'];
    const frontendSkills = [
        'React (Vite)',
    ];

    const backendSkills = [
        'Go (Gin)',
        'Node.js (Express.js)',
        'PostgreSQL',
        'MongoDB',
        'Redis',
    ];

    return (
        <div className={styles['view']}>
            <div className={styles['title']}>
                <header>我直屬於你</header>
                <h1>海大資工新生直屬抽籤全端系統</h1>
                <div className={styles['title-skills']}>
                    {frontendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} color={'#DBD4C6'}/>
                    ))}
                    {backendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} color={colors[index]}/>
                    ))}
                </div>
            </div>
            <div className={styles['tech-stack']}>
                <h2>技術棧 Tech Stack</h2>
                <div className={styles['tech-stack-part']}>
                    <h3>前端 Frontend</h3>
                    <ul>
                        <li>React.js (Vite)</li>
                    </ul>
                </div>
                <div className={styles['tech-stack-part']}>
                    <h3>後端 Backend</h3>
                    <ul>
                        {backendSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}