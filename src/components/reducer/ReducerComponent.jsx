import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  //   const [count,setCount] = useState(0);
  return (
    <div>
      <p>Count = {count}</p>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
};

export default ReducerComponent;
