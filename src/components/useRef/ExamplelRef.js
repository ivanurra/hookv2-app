import React, { useState } from "react";
import { MultipleHooks } from "../Examples/MultipleHooks";
import "../useEffect/effects.scss";

export const ExamplelRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>ExamplelRef</h1>
      <hr />
      <button
        className="btn btn-primary mb-4"
        onClick={() => {
          setShow(show === false);
        }}
      >
        Show/Hide
      </button>
      {show && <MultipleHooks />}
    </div>
  );
};
