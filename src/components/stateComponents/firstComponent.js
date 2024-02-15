import { useState } from "react";

const FirstComponent = () => {
    const [count, setCount] = useState(0);
    // value, function
    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const incrementByFive = () => {
        setCount((prevCount) => prevCount + 1); // 1
        setCount((prevCount) => prevCount + 1); // 1 => 1 + 1 = 2
        setCount((prevCount) => prevCount + 1); // 2 => 2 + 1 = 3
        setCount((prevCount) => prevCount + 1); // 3 => 3 + 1 = 4
        setCount((prevCount) => prevCount + 1); // 4 => 4 + 1 = 5
    }

    // name, setName
    return (
        <div>
            <p>My Count is : {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incrementByFive}>Increment by 5</button>
        </div>
    );
}

export default FirstComponent;