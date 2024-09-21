import styles from './page.module.css';
import Tag from './skillTag/SkillTag';
import AssignMember from './assignMember/AssignMember';

export default function Project() {
    const colors = ['#B7B7BD', '#D4B8B4', '#ADAAA5', '#CCD2CC', '#C09D9B', '#DBD4C6'];
    const frontendSkills = ['React (Vite)'];
    const backendSkills = [
        'Go (Gin)',
        'Node.js (Express.js)',
        'PostgreSQL',
        'MongoDB',
        'Redis',
    ];

    const teamMembers = [
        {
            imageSrc: 'https://github.com/Ateto1204.png',
            name: '蘇東毅',
            tasks: ['後端', '資料綁定', '畫面跳轉', 'UI/UX 優化'],
            theme: '#C09D9B',
        },
        {
            imageSrc: 'https://github.com/tyuLD.png',
            name: '王鈞宇',
            tasks: ['抽籤動畫'],
            theme: '#B7B7BD',
        },
        {
            imageSrc: 'https://github.com/Ilenol.png',
            name: '林彥君',
            tasks: ['匯出 Excel 抽籤結果'],
            theme: '#C09D9B',
        },
        {
            imageSrc: 'https://github.com/cjc094.png',
            name: '陳婕熙',
            tasks: ['登入畫面'],
            theme: '#CCD2CC',
        },
    ];

    return (
        <div className={styles['view']}>
            <div className={styles['title']}>
                <header>我直屬於你</header>
                <h1>海大資工新生直屬抽籤全端系統</h1>
                <div className={styles['title-skills']}>
                    { frontendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} color={'#DBD4C6'} />
                    )) }
                    { backendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} color={colors[index]} />
                    )) }
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
                <div className={styles['assign-member-set']}>
                    {teamMembers.map((member, index) => (
                        <AssignMember
                            key={index}
                            imageSrc={member.imageSrc}
                            name={member.name}
                            tasks={member.tasks}
                            theme={member.theme}
                        />
                    ))}
                </div>
            </div>
            <h2 className={styles['git-model']}><b>開發流程 Development Process</b></h2>
            <div className={styles['dev-process']}>
                <div className={styles['feature-branch']}>
                    <p className={styles['subtitle']}>Feature Branch</p>
                    <p className={styles['feature']}>F5</p>
                    <div className={styles['line1']}></div>
                    <p className={styles['feature']}>F4</p>
                    <div className={styles['line1']}></div>
                    <p className={styles['feature']}>F3</p>
                    <div className={styles['line1']}></div>
                    <p className={styles['feature']}>F2</p>
                    <div className={styles['line1']}></div>
                    <p className={styles['feature']}>F1</p>
                </div>
                <div className={styles['arc1']}></div>
                <div className={styles['arc2']}></div>
                <div className={styles['arc3']}></div>
                <div className={styles['arc4']}></div>
                <div className={styles['develop-branch']}>
                    <p className={styles['subtitle']}>Develop Branch</p>
                    <p className={styles['develop']}>D4</p>
                    <div className={styles['line2']}></div>
                    <p className={styles['develop']}>D3</p>
                    <div className={styles['line2']}></div>
                    <p className={styles['develop']}>D2</p>
                    <div className={styles['line2']}></div>
                    <p className={styles['develop']}>D1</p>
                </div>
                <div className={styles['arc5']}></div>
                <div className={styles['arc6']}></div>
                <div className={styles['arc7']}></div>
                <div className={styles['main-branch']}>
                    <p className={styles['subtitle']}>Main Branch</p>
                    <p className={styles['main']}>M3</p>
                    <div className={styles['line3']}></div>
                    <p className={styles['main']}>M2</p>
                    <div className={styles['line3']}></div>
                    <p className={styles['main']}>M1</p>
                </div>
            </div>

        </div>
    );
}