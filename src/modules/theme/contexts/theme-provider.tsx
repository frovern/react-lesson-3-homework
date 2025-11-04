import { useEffect } from 'react'
import { useLocalStorage } from '../../../shared/hooks/use-local-storage'
import type { ReactNode } from 'react'
import { ThemeContext, type Theme } from './theme-context'

type ThemeProviderProps = {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
