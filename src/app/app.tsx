import { ThemeProvider, ThemeToggle } from '../modules/theme'
import styles from './app.module.css'
import { CounterProvider } from '../modules/counter/contexts/counter-provider'
import { CounterChangeHook } from '../modules/counter/ui/counter-with-hook'
import { CounterChange } from '../modules/counter/ui/counter-with-context'

function MainPage() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Урок 3: Context API и кастомные хуки
            </h1>

            <ThemeToggle />

            <div className={styles.explanation}>
                <h3 className={styles.explanationTitle}>Примеры:</h3>
                <ul className={styles.list}>
                    <li>
                        <strong>Context API</strong> - используется для темы
                        приложения. Все компоненты внутри ThemeProvider имеют
                        доступ к текущей теме и функции переключения.
                    </li>
                    <li>
                        <strong>Кастомный хук</strong> - useLocalStorage
                        используется для сохранения темы в localStorage, чтобы
                        она сохранялась после перезагрузки страницы.
                    </li>
                </ul>
            </div>
            <CounterChange />
            <CounterChange />
            <CounterChange />
            <CounterChangeHook />
            <CounterChangeHook />
            <CounterChangeHook />
            <CounterChangeHook />
        </div>
    )
}

function App() {
    return (
        <ThemeProvider>
            <CounterProvider>
                <MainPage />
            </CounterProvider>
        </ThemeProvider>
    )
}

export default App
