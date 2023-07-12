import { buttonKey1, buttonKey2 } from './data'
import styles from './Button.module.css'
import clsx from 'clsx'

function Button() {

    return (
        <div className={styles.buttonContainer}>
            {/* <div className={styles.button1}> */}
            {buttonKey1.map((key1) => {
                const button1 = clsx(styles.button_key, {
                    [styles.button_del]: key1.id == 'delete'
                })
                return (
                    <div key={key1.id} className={button1}>{key1.value}</div>
                )
            })}
            {/* </div> */}
            {/* <div className={styles.button2}> */}
            {buttonKey2.map(key2 => (
                <div key={key2.id} className={styles.button2}>{key2.value}</div>
            ))}
            {/* </div> */}
        </div>
    )
}

export default Button