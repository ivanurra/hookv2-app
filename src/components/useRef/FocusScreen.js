import React from "react";
import "../useEffect/effects.scss";

export const FocusScreen = () => {
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input className="form-control" placeholder="Your name"/>
      <button className="mt-2 btn btn-outline-secondary">Focus</button>
    </div>
  );
};
