import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        counter ? setCounter(counter - 1) : 0;
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
            <button type ="button" onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}