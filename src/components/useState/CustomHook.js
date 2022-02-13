import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./styles.scss";

export const CustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button className="btn btn-primary ml-4" onClick={increment}>
        +
      </button>
      <button className="btn btn-primary ml-4" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary ml-4" onClick={decrement}>
        -
      </button>
    </div>
  );
};
