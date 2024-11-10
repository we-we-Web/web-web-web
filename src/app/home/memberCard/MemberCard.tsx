import styles from './MemberCard.module.css';
import Image from 'next/image';

const leader = {
    name: '蘇東毅',
    imageUrl: 'https://github.com/Ateto1204.png',
    link: 'https://Ateto1204.github.io/',
    alt: '蘇東毅',
    location: 'Taiwan'
}

const members = [
    {
        name: '陳宏瑜',
        imageUrl: 'https://github.com/01257158.png',
        link: 'https://01257158.github.io/',
        alt: '陳宏瑜',
        location: 'Taiwan'
    },
    {
        name: '王鈞宇',
        imageUrl: 'https://github.com/tyuLD.png',
        link: 'https://tyuLD.github.io/',
        alt: '王鈞宇',
        location: 'Taiwan'
    },
    {
        name: '劉長諺',
        imageUrl: 'https://github.com/Liujosh1014.png',
        link: 'https://Liujosh1014.github.io/',
        alt: '劉長諺',
        location: 'Taiwan'
    },
    {
        name: '林彥均',
        imageUrl: 'https://github.com/Ilenol.png',
        link: 'https://Ilenol.github.io/',
        alt: '林彥均',
        location: 'Taiwan'
    },
    {
        name: '呂翰昇',
        imageUrl: 'https://github.com/alanlu01.png',
        link: 'https://alanlu01.github.io/',
        alt: '呂翰昇',
        location: 'Taiwan'
    },
    {
        name: '陳婕熙',
        imageUrl: 'https://github.com/cjc094.png',
        link: 'https://cjc094.github.io/',
        alt: '陳婕熙',
        location: 'Taiwan'
    },
    {
        name: '謝誌評',
        imageUrl: 'https://github.com/olalbertlo.png',
        link: 'https://olalbertlo.github.io/',
        alt: '謝誌評',
        location: 'Taiwan'
    }
];

export default function MemberCard() {
    return (
        <>
            <div className={styles['intro-title']}>
                <h2>Member Introduction</h2>
            </div>

            <div className={styles['team']}>
                <div className={styles['leader']}>
                    <div className={styles['card']}>
                        <div className={styles['card-img']}>
                            <Image src={leader.imageUrl} alt={leader.alt} width={280} height={300} />
                        </div>
                        <div className={styles['card-content']}>
                            <div className={styles['card-content-header']}>
                                <h2 className={styles['card-content-heading']}>
                                    {leader.name}
                                    <a href={leader.link} target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                        </svg>
                                    </a>
                                </h2>
                                <p className={styles['card-content-subheading']}>{leader.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['member']}>
                    {members.map((member, index) => (
                        <div key={index} className={styles['card']}>
                            <div className={styles['card-img']}>
                                <Image src={member.imageUrl} alt={member.alt} width={280} height={300} />
                            </div>
                            <div className={styles['card-content']}>
                                <div className={styles['card-content-header']}>
                                    <h2 className={styles['card-content-heading']}>
                                        {member.name}
                                        <a href={member.link} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                            </svg>
                                        </a>
                                    </h2>
                                    <p className={styles['card-content-subheading']}>{member.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}