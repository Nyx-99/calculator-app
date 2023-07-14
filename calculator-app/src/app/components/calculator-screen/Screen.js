import styles from './Screen.module.scss'
import { useThemeContext } from '../../store'
import clsx from 'clsx'

function Screen() {
    const themeContext = useThemeContext()
    const { theme, setTheme } = themeContext

    const screen = clsx(styles.screen, {
        [styles.theme_1]: theme == 'theme_1',
        [styles.theme_2]: theme == 'theme_2',
        [styles.theme_3]: theme == 'theme_3',
    })

    return(
        <div className={screen}>

        </div>
    )
}

export default Screen