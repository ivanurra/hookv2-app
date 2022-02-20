import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("component mounted!");

    return () => {
      console.log("component unmounted!");
    };
  }, []);

  return (
    <div>
      <h3>Lorem ipsum.</h3>
    </div>
  );
};
