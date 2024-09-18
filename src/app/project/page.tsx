import styles from './page.module.css';
import Tag from './skillTag/SkillTag';
import Image from 'next/image';

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

                    <div className={styles['team-members']}>
                        <div className={styles['team-member']}>
                            <Image
                                src='https://github.com/Ateto1204.png'
                                alt='Ateto'
                                width={140}
                                height={150}
                                style={{ border: '3px solid #C09D9B' }}
                            />
                            <div className={styles['whiteboard']} style={{ border: '2px solid #e0e0e0',backgroundColor:'#C09D9B' }}>
                                <p style={{ textAlign: 'center' }}>蘇東毅</p>
                                <li>後端</li>
                                <li>資料綁定</li>
                                <li>畫面跳轉</li>
                                <li>UI/UX 優化</li>
                            </div>
                        </div>

                        <div className={styles['team-member']}>
                            <Image
                                src='https://github.com/tyuLD.png'
                                alt='王鈞宇'
                                width={140}
                                height={150}
                                style={{ border: '3px solid #B7B7BD' }}
                            />
                            <div className={styles['whiteboard']} style={{ border: '2px solid #e0e0e0' ,backgroundColor:'#B7B7BD'}}>
                                <p style={{ textAlign: 'center' }}>王鈞宇</p>
                                <li>抽籤動畫</li>
                            </div>
                        </div>

                        <div className={styles['team-member']}>
                            <Image src='https://github.com/Ilenol.png'
                                alt='林彥君'
                                width={140}
                                height={150}
                                style={{ border: '3px solid #C09D9B' }}
                            />
                            <div className={styles['whiteboard']} style={{ border: '2px solid #e0e0e0' ,backgroundColor: '#C09D9B'}}>
                                <p style={{ textAlign: 'center' }}>林彥君</p>
                                <li>匯出 Excel 抽籤結果</li>
                            </div>
                        </div>

                        <div className={styles['team-member']}>
                            <Image src='https://github.com/cjc094.png'
                                alt='jc'
                                width={140}
                                height={150}
                                style={{ border: '3px solid #CCD2CC' }}
                            />
                            <div className={styles['whiteboard']} style={{ border: '2px solid #e0e0e0', backgroundColor: '#CCD2CC'}}>
                                <p style={{ textAlign: 'center' }}>陳婕熙</p>
                                <li>登入畫面</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}