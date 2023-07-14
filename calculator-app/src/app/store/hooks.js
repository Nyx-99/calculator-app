import { useContext } from 'react'
import { ThemeContext } from './Context'

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context
}


export { useThemeContext }