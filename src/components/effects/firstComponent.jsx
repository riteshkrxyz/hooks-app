import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [count, setCount] = useState(0);

  //   1. function , depencency array

  useEffect(() => {
    console.log("useEffect called");
    document.title = `Your title is ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default EffectComponent;
