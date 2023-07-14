'use client'
import { useRef, useEffect, useState } from 'react'
import { useThemeContext } from '../../store'
import styles from './Header.module.scss'
import clsx from 'clsx'

function Header() {
    const themeContext = useThemeContext()
    const { theme, setTheme } = themeContext

    const header_container = clsx(styles.header_container, {
        [styles.theme_1]: theme == 'theme_1',
        [styles.theme_2]: theme == 'theme_2',
        [styles.theme_3]: theme == 'theme_3',
    })

    const body = clsx({
        [styles.theme_1]: theme == 'theme_1',
        [styles.theme_2]: theme == 'theme_2',
        [styles.theme_3]: theme == 'theme_3',
    })

    useEffect(() => {
        if (theme == 'theme_1') 
        { 
            document.body.classList.remove('theme_2', 'theme_3');
            document.body.classList.add('theme_1') 
        }
        else if (theme == 'theme_2')
        {
            document.body.classList.remove('theme_1', 'theme_3');
            document.body.classList.add('theme_2')
        }
        else if (theme == 'theme_3')
        {
            document.body.classList.remove('theme_1', 'theme_2');
            document.body.classList.add('theme_3')
        }
    }, [theme])

    const slide_button = useRef()
    const choice_1 = useRef()
    const choice_2 = useRef()
    const choice_3 = useRef()

    console.log(theme)
    function handleChangeTheme(choice) {
        slide_button.current.style.left = choice.current.offsetLeft + 'px';
    }

    return (
        <div className={header_container}>
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
                            onClick={() => handleChangeTheme(choice_1)}
                            onMouseUp={() => setTheme('theme_1')}
                            className={styles.choice}>
                        </div>
                        <div
                            ref={choice_2}
                            onClick={() => handleChangeTheme(choice_2)}
                            onMouseUp={() => setTheme('theme_2')}
                            className={styles.choice}>

                        </div>
                        <div
                            ref={choice_3}
                            onClick={() => handleChangeTheme(choice_3)}
                            onMouseUp={() => setTheme('theme_3')}
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