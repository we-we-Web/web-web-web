import styles from './page.module.css';
import Tag from './skillTag/SkillTag';
import Image from 'next/image';

export default function Project() {

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
                        <Tag key={index} skill={skill} />
                    ))}
                    {backendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} />
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
                    <div className={styles['team-members']}>
                        <div className={styles['team-member']}>
                            <Image src='https://github.com/Ateto1204.png' alt='Ateto' width={140} height={150} style={{ borderRadius: '50%' }} />
                            <ul>
                                <p>蘇東毅</p>
                                <li>後端</li>
                                <li>資料綁定</li>
                                <li>畫面跳轉</li>
                                <li>UI/UX 優化</li>
                            </ul>
                        </div>
                        <div className={styles['team-member']}>
                            <Image src='https://github.com/tyuLD.png' alt='王鈞宇' width={140} height={150} />
                            <ul>
                                <p>王鈞宇</p>
                                <li>抽籤動畫</li>
                            </ul>
                        </div>
                        <div className={styles['team-member']}>
                            <Image src='https://github.com/Ilenol.png' alt='林彥君' width={140} height={150}  />
                            <ul>
                                <p>林彥君</p>
                                <li>匯出 Excel 抽籤結果</li>
                            </ul>
                        </div>
                        <div className={styles['team-member']}>
                            <Image src='https://github.com/cjc094.png' alt='jc' width={140} height={150}  />
                            <ul>
                                <p>陳婕熙</p>
                                <li>登入畫面</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
