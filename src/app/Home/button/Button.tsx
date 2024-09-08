import styles from './Button.module.css';

export default function Button(){
    return (
        <div className={styles.Button}>
            <button className={styles.button1}>
                <a href='https://ntoucse-drawlots.zeabur.app' target='_blank'>
                    Getstart
                </a>
            </button>
            <button className={styles.button2}>
                <a href='https://github.com/Ateto1204/draw-lots-backend' target='_blank'>
                    View on Github
                </a>
            </button>
        </div>     
    );
}