import styles from './SkillTag.module.css';

interface TagProps {
    skill: String
    color: string 
}

export default function Tag({ skill,color }: TagProps) {
    return (
        <div className={styles['tag-view']} style={{ backgroundColor: color }}>
            {skill}
        </div>
    );
};