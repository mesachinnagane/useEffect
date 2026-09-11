import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    alert("this is use effect count");
  }, [count]);

  return (
    <>
      <h1>count us {count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  );
};

export default UseEffect;
