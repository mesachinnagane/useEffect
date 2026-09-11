import React, { useEffect, useState } from "react";

const C = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    (console.log("Componant -->C"), [count]);
  });
  return (
    <>
      <h1>Count Array is:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Effect</button>
    </>
  );
};

export default C;
