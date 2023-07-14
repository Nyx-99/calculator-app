import { buttonKey1, buttonKey2 } from './data'
import { useThemeContext } from '../../store'
import styles from './Button.module.scss'
import clsx from 'clsx'

function Button() {
    const themeContext = useThemeContext()
    const { theme, setTheme } = themeContext
    const button_container = clsx(styles.button_container, {
        [styles.theme_1]: theme == 'theme_1',
        [styles.theme_2]: theme == 'theme_2',
        [styles.theme_3]: theme == 'theme_3',
    })

    return (
        <div className={button_container}>
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
            {buttonKey2.map(key2 => {
                const button2 = clsx(styles.button2,styles.button_key, {
                    [styles.button_del]: key2.id == 'clear',
                    [styles.button_equals] : key2.id == 'equals'
                })
                return (
                    <div key={key2.id} className={button2}>{key2.value}</div>
                )
            })}
            {/* </div> */}
        </div>
    )
}

export default Button