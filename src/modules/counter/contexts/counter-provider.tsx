import {useState} from 'react'
import { CounterContext } from './counter-context'
import type { ReactNode } from 'react'

type CounterProviderProps = {
    children: ReactNode
}

export function CounterProvider({ children} : CounterProviderProps ) {
    const [count, setCount] = useState(0)

    const increment = () => setCount( count + 1 )
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    )
}