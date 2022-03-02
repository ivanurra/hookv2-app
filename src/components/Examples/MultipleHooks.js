import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import "../useEffect/effects.scss";

export const MultipleHooks = () => {
  const { loading, data } = useFetch(
    "https://www.breakingbadapi.com/api/character/random"
  );

  const { img, name, nickname } = !!data && data[0];

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Characters</h2>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div className="text-center">
          <h3 className="mb-2">{name}</h3>
          <img width="300px" src={img} alt={name} />
          <h3 className="mt-2">Nickname: {nickname}</h3>
        </div>
      )}
      <button onClick={refreshPage}>Next</button>
    </div>
  );
};
