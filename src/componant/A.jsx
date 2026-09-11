import React from "react";
import { useEffect } from "react";

const A = () => {
  useEffect(() => {
    console.log("Componant -->A");
  });
  return (
    <>
      <h1>Without Array</h1>
    </>
  );
};

export default A;
