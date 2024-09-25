import styles from './ProjectSubtitle.module.css';

interface ContentProps {
    content: string, 
}

export const ProjectSubtitle = ({ content }: ContentProps) => (
    <h2 className={styles['subtitle']}>{content}</h2>
);