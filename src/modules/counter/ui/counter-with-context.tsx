import { useCounterContext } from "../contexts/use-counter-context";
import styles from "./counter.module.css"

export const CounterChange = () => {
    const  { count, increment, decrement, reset }  = useCounterContext()

    return (
        <div className={styles.block}>  
            <span>{count}</span>
            <button className = {styles.context} onClick={increment}>+1</button>
            <button className = {styles.context} onClick={decrement}>-1</button>
            <button className = {styles.context} onClick={reset}>Сброс</button>
        </div>
    )
}