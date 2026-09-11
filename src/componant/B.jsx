import React, { useEffect } from "react";

const B = () => {
  useEffect(() => {
    (console.log("Componant -->B"), []);
  });
  return (
    <>
      <h1>this is empty Array</h1>
    </>
  );
};

export default B;
