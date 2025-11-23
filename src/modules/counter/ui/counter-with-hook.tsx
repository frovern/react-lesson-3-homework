import { useCounter } from "../hooks/use-counter"
import styles from "./counter.module.css"

export const CounterChangeHook = () => {
    const  { count, increment, decrement, reset }  = useCounter()

    return (
        <div className={styles.block}>  
            <span>{count}</span>
            <button className={styles.hooks} onClick={increment}>+1</button>
            <button className={styles.hooks} onClick={decrement}>-1</button>
            <button className={styles.hooks}onClick={reset}>Сброс</button>
        </div>
    )
}