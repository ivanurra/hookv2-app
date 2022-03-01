import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "../useEffect/effects.scss";

export const MultipleHooks = () => {
  const state = useFetch("https://www.breakingbadapi.com/api/character/random");
  console.log(state);

  return (
    <div>
      <h>MultipleHooks</h>
    </div>
  );
};
