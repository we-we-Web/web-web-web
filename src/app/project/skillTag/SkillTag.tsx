import styles from './skillTag.module.css';

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