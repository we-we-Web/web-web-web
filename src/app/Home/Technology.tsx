import styles from './Technology.module.css'

export default function Technology(){
    let array = ['React(Vite)','Go(Gin)','Node (Express)','MongoDB','Redis','PostgreSQL'];

    return  (
        <div className={styles.technologyContainer}>
            {array.map((skill, index) => (
                <div className={styles.technology} key={index}>{skill}</div>
            ))}
        </div>
    )
}