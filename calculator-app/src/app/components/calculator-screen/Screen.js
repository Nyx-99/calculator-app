import styles from './Screen.module.scss'
import { useThemeContext } from '../../store'
import clsx from 'clsx'

function Screen({ inputs }) {
    const themeContext = useThemeContext()
    const { theme, setTheme } = themeContext
    const {key, keys} = inputs

    const screen = clsx(styles.screen, {
        [styles.theme_1]: theme == 'theme_1',
        [styles.theme_2]: theme == 'theme_2',
        [styles.theme_3]: theme == 'theme_3',
    })
    // console.log(key)
    return (
        <div className={screen}>
           {keys.length === 0  ? <h1 className={styles.display}>{key}</h1> : <h1 className={styles.display}>{keys}</h1>}
        </div>
    )
}

export default Screen