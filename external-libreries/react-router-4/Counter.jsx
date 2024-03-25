import { useState } from "react"
function useCounter(initialValue = 0, increment = 1, decrement = 1) {
    const [counter, setCounter] = useState(initialValue)
    function incrementCounter() {
        setCounter((c) => c + increment)
    }
    function decrementCounter() {
        setCounter((c) => c - decrement)
    }
    function resetCounter() {
        setCounter(initialValue)
    }
    return {
        counter: counter,
        onIncrement: incrementCounter,
        onDecrement: decrementCounter,
        onReset: resetCounter,
    }
}




export function Counter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <div>
            <h1>This a counter {counter}</h1>
            <button onClick={onIncrement} >Increment</button>
            <button onClick={onDecrement} >Decrement</button>
            <button onClick={onReset} >Reset</button>
        </div>
    )

}