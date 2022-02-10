import React, { useState } from "react";
import "./styles.scss";

export const Countdown = () => {
  const [state, setState] = useState({
    counter1: 0,
    counter2: 0,
  });

  const { counter1, counter2 } = state;

  return (
    <div>
      <h2 className="ml-4">BASKETBALL SCORE </h2>
      <h1 className="ml-4 mt-4">Home {counter1}</h1>
      <h1 className="ml-4">Visitor {counter2}</h1>
      <hr />
      <div className="btn-score">
        <button
          className="btn btn-primary ml-4"
          onClick={() => {
            setState({ ...state, counter1: counter1 + 1 });
          }}
        >
          1 POINTS HOME
        </button>
        <button
          className="btn btn-primary ml-4"
          onClick={() => {
            setState({ ...state, counter1: counter1 + 2 });
          }}
        >
          2 POINTS HOME
        </button>
        <button
          className="btn btn-primary ml-4"
          onClick={() => {
            setState({ ...state, counter1: counter1 + 3 });
          }}
        >
          3 POINTS HOME
        </button>
        <button
          className="btn btn-primary ml-4"
          onClick={() => {
            setState({ ...state, counter1: counter1 - 1 });
          }}
        >
          ERROR
        </button>
        <button
          className="btn btn-danger ml-4"
          onClick={() => {
            setState({ ...state, counter2: counter2 + 1 });
          }}
        >
          1 POINTS VISITOR
        </button>
        <button
          className="btn btn-danger ml-4"
          onClick={() => {
            setState({ ...state, counter2: counter2 + 2 });
          }}
        >
          2 POINTS VISITOR
        </button>
        <button
          className="btn btn-danger ml-4"
          onClick={() => {
            setState({ ...state, counter2: counter2 + 3 });
          }}
        >
          3 POINTS VISITOR
        </button>
        <button
          className="btn btn-danger ml-4"
          onClick={() => {
            setState({ ...state, counter2: counter2 - 1 });
          }}
        >
          ERROR
        </button>
      </div>
    </div>
  );
};
