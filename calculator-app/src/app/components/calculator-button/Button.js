import { useState } from 'react'
import { buttonKey1, buttonKey2 } from './data'
import { useThemeContext } from '../../store'
import styles from './Button.module.scss'
import clsx from 'clsx'

function Button({ onHandleClick }) {
    const themeContext = useThemeContext()
    const [isActive, setIsActive] = useState(true)
    const { theme, setTheme } = themeContext
    const button_container = clsx(styles.button_container, {
        [styles.theme_1]: theme == 'theme_1',
        [styles.theme_2]: theme == 'theme_2',
        [styles.theme_3]: theme == 'theme_3',
    })

    return (
        <div className={button_container}>
            {buttonKey1.map((key1, index) => {
                
                const button1 = clsx(styles.button_key, {
                    [styles.button_del]: key1.id == 'delete',
                    [styles.active]: key1.active,
                })
                return (
                    <div
                        id={index}
                        key={key1.id}
                        className={button1}
                        onClick={() => onHandleClick(key1, index)}
                        // change button's color when it is clicked on
                        onMouseDown={() => {
                            key1.active = isActive
                            setIsActive(false)
                            // console.log(key1.active)
                        }}
                        onMouseUp={() => {
                            key1.active = isActive
                            setIsActive(true)
                        }}
                    >{key1.value || key1.number}</div>
                )
            })}

            {buttonKey2.map((key2) => {
                const button2 = clsx(styles.button2, styles.button_key, {
                    [styles.button_del]: key2.id == 'clear',
                    [styles.button_equals]: key2.id == 'equals',
                    [styles.active]: key2.active
                })
                return (
                    <div
                        key={key2.id}
                        className={button2}
                        onClick={() => onHandleClick(key2)}
                        // change button's color when it is clicked on 
                        onMouseDown={() => {
                            key2.active = isActive
                            setIsActive(false)
                            console.log(key2.active)
                        }}
                        onMouseUp={() => {
                            key2.active = isActive
                            setIsActive(true)
                        }}
                    >{key2.value}</div>
                )
            })}
        </div>
    )
}

export default Button