import React, { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("Blue");
  //   const init = () => {
  //     console.log("run function");
  //     return 0;
  //   };
  //   const [count, setCount] = useState(init()); // this will call the function on every state update
  //   const [count, setCount] = useState(() => {
  //     console.log("run function");
  //     return 0;
  //   });

  //   const [state, setState] = useState({ count: 0, theme: "blue" });
  //   const count = state.count;
  //   const theme = state.theme;

  // The above version for passing initial state of the state can be used when initial value of the state,
  // is very complex and making it run every time a components is re-rendered will make our app slow
  // the function version will initialize it only once as initial stste

  //   const decrement = () => {
  //     // console.log("decrement");
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         count: prevState.count - 1,
  //       };
  //     });
  //   };
  //   const increment = () => {
  //     // console.log("increment");
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         count: prevState.count + 1,
  //       };
  //     });
  //   };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("Yellow");
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("Red");
  };
  return (
    <div>
      <h1>UseState hook</h1>
      <h2>Counter</h2>
      <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
};
