import styles from './Button.module.css';

export default function Button(){
    return (
        <div className={styles.Button}>
            <button className={styles.button1}>Getstart</button>
            <button className={styles.button2}>View on Github</button>
        </div>     
    );
}