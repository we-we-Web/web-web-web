import styles from './TopBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export default function TopBar() {
    return (
        <div className={styles.bar}>
            <p>Webproject</p>
            <div className={styles.selection}>
                <a href=''>Docs</a>
                <a href=''>Learn</a>
                <a href=''>Templates</a>
                <a href=''>Deploy</a>
            </div>
            <div className={styles.GitHub}>
                <a href='' className={styles.icon}>
                    <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
            </div>
            
        </div>
    );
}
