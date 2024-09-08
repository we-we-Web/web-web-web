import styles from './SkillTag.module.css';

interface TagProps {
    skill: String
}

export default function Tag({ skill }: TagProps) {
    return (
        <div className={styles['tag-view']}>
            {skill}
        </div>
    );
};