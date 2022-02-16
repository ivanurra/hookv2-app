import React, { useEffect, useState } from "react";
import "./effects.scss";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  // useEffect(() => {
  //   console.log("hey");
  // });

  return (
    <>
      <h1>Form:</h1>
      <hr />
      <div className="form-group">
        <input type="text" name="name" />
      </div>
    </>
  );
};
