import Image from 'next/image';
import styles from './AssignMember.module.css';

interface AssignMemberProps {
    imageSrc: string,
    name: string, 
    tasks: string[], 
    theme: string, 
}

export default function AssignMember({ imageSrc, name, tasks, theme }: AssignMemberProps) {
    return (
        <div className={styles['assign-member']}>
            <Image
                src={imageSrc}
                alt={name}
                width={140}
                height={150}
                style={{ border: `3px solid ${theme}` }}
            />
            <div className={styles['whiteboard']} style={{ backgroundColor: theme }}>
                <p style={{ textAlign: 'center' }}>
                    {name}
                </p>
                { tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                )) }
            </div>
        </div>
    );
}