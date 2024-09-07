import styles from './Technology.module.css'

export default function Technology(){
    let array = ['React(Vite)','Go(Gin)','Node (Express)','PostgreSQL','MongoDB','Redis'];

    return  (
        <div className={styles.technology}>
            {array.map((skill, index) => (
                <div className={styles.technology2} key={index}>{skill}</div>
            ))}
        </div>
    )
}