import React from 'react';
import styles from './Technology.module.css';

const colors = ['#B7B7BD', '#D4B8B4', '#ADAAA5', '#CCD2CC', '#C09D9B', '#DBD4C6'];

const Technology: React.FC = () => {
    const technologies = [        
        'React(Vite)',
        'Go(Gin)',
        'Node (Express)',
        'MongoDB',
        'Redis',
        'PostgreSQL'
    ];

    return (
        <div className={styles['technology-container']}>
            {technologies.map((tech, index) => (
                <div
                    key={index}
                    className={styles.technology}
                    style={{ backgroundColor: colors[index] }}
                >
                    {tech}
                </div>
            ))}
        </div>
    );
};

export default Technology;