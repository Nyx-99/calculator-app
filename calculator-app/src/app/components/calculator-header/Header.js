'use client'
import { useRef, useContext } from 'react'
import { ThemeContext } from '../../store'
import styles from './Header.module.css'

function Header() {
    const themeContext = useContext(ThemeContext)
    const {theme, setTheme} = themeContext
    const slide_button = useRef()
    const choice_1 = useRef()
    const choice_2 = useRef()
    const choice_3 = useRef()
    // console.log(theme)
    function handleChangeTheme(choice) {
        slide_button.current.style.left = choice.current.offsetLeft + 'px';
    }
    return (
        <div id={styles.header_container}>
            <h2 className={styles.left_header}>calc</h2>
            <div className={styles.right_header}>
                <p className={styles.theme}>THEME</p>
                <div className={styles.slide_section}>
                    <div className={styles.slide_choices}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className={styles.slide_bar}>
                        <div
                            ref={choice_1}
                            onMouseUp={() => handleChangeTheme(choice_1)}
                            onMouseDown={() => setTheme('theme_1')}
                            className={styles.choice}>
                        </div>
                        <div
                            ref={choice_2}
                            onMouseUp={() => handleChangeTheme(choice_2)}
                            onMouseDown={() => setTheme('theme_2')}
                            className={styles.choice}>

                        </div>
                        <div
                            ref={choice_3}
                            onMouseUp={() => handleChangeTheme(choice_3)}
                            onMouseDown={() => setTheme('theme_3')}
                            className={styles.choice}>

                        </div>
                        <div
                            ref={slide_button}
                            className={styles.slide_button}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header