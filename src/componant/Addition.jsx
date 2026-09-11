import React, { useEffect, useState } from "react";

const Addition = () => {
  useEffect(() => {
    add();
  });

  let add = () => {
    let a = 5;
    let b = 6;
    let res = a + b;
    console.log(res);
  };
  return (
    <>
      <h1>Addition</h1>
    </>
  );
};

export default Addition;
