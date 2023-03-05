import React, { useState, useMemo } from "react";

export const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowCalculation(number);
  }, [number]);
  const darkStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <h2>Memo</h2>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={darkStyles}>{doubleNumber}</div>
    </div>
  );
};
function slowCalculation(num) {
  console.log("mySlowFunction");
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}
