import React, { useRef } from "react";
import "../useEffect/effects.scss";

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input className="form-control" placeholder="Your name" ref={inputRef}/>
      <button className="mt-2 btn btn-outline-secondary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
