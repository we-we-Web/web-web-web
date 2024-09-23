import styles from './GitGraph.module.css';

export const GitGraph = () => (
    <div className={styles['dev-process']}>
        <div className={styles['feature-branch']}>
            <p className={styles['subtitle']}>Feature Branch</p>
            <p className={styles['feature']}>F5</p>
            <div className={styles['line1']}></div>
            <p className={styles['feature']}>F4</p>
            <div className={styles['line1']}></div>
            <p className={styles['feature']}>F3</p>
            <div className={styles['line1']}></div>
            <p className={styles['feature']}>F2</p>
            <div className={styles['line1']}></div>
            <p className={styles['feature']}>F1</p>
        </div>
        <div className={styles['arc1']}></div>
        <div className={styles['arc2']}></div>
        <div className={styles['arc3']}></div>
        <div className={styles['arc4']}></div>
        <div className={styles['develop-branch']}>
            <p className={styles['subtitle']}>Develop Branch</p>
            <p className={styles['develop']}>D4</p>
            <div className={styles['line2']}></div>
            <p className={styles['develop']}>D3</p>
            <div className={styles['line2']}></div>
            <p className={styles['develop']}>D2</p>
            <div className={styles['line2']}></div>
            <p className={styles['develop']}>D1</p>
        </div>
        <div className={styles['arc5']}></div>
        <div className={styles['arc6']}></div>
        <div className={styles['arc7']}></div>
        <div className={styles['main-branch']}>
            <p className={styles['subtitle']}>Main Branch</p>
            <p className={styles['main']}>M3</p>
            <div className={styles['line3']}></div>
            <p className={styles['main']}>M2</p>
            <div className={styles['line3']}></div>
            <p className={styles['main']}>M1</p>
        </div>
    </div>
);