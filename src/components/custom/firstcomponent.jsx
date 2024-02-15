import { useState } from "react";
import useCounter from "./useCounter";

const CustomCompUse = () => {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <p>Custom component using useCounter</p>
      <p>Count = {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CustomCompUse;
