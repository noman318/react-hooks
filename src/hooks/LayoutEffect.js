import React, { useState, useEffect, useLayoutEffect } from "react";

export const LayoutEffect = () => {
  const [count, setCount] = useState(0);
  // useLayoutEffect works synchronously it runs while DOM is being updated while loading
  useLayoutEffect(() => {
    console.log("counting", count);
  }, [count]);
  return (
    <div>
      <h1>LayoutEffect</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h3>{count}</h3>
    </div>
  );
};
