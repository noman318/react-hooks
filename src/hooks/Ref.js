/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

export const Ref = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");
  //   const inputRef = useRef();
  //   const renderCount = useRef(0);
  //   useEffect(() => {
  //     renderCount.current = renderCount.current + 1;
  //   });
  // ref can be used to store value of previous state
  //   function focus() {
  //     console.log(inputRef.current);
  //     inputRef.current.focus();
  //   }
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  // we are saving the previous value of name variable without even re-rendering the components
  return (
    <div>
      <h2>useRef hook</h2>
      <input
        // ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>
        My name is "{name}" and previous value was "{prevName.current}"
      </h4>
      {/* <p>No. of times rendered {renderCount.current}</p> */}
      {/* <button onClick={focus}>Focus</button> */}
    </div>
  );
};
