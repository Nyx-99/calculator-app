import { useState } from 'react'
import { ThemeContext } from './Context'

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('theme_1')
    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider