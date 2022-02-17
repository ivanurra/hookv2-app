import React, { useEffect, useState } from "react";
import "./effects.scss";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hey");
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Form:</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
