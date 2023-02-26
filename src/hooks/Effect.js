/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export const Effect = () => {
  //   const [resourceType, setResourceType] = useState("posts");
  //   const [items, setItems] = useState([]);
  //   useEffect(() => {
  //     console.log("onMount");
  //   }, []);
  // Eg. of componentDidMount it will be executed only once at time the components will be first mounted
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("cleanup running");
      window.removeEventListener("resize", handleResize);
    };
    // cleanup runs before the useEffect runs
  }, []);

  return (
    <>
      {/* <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("todos")}>Todos</button>
        <h1>{resourceType}</h1>
        {items?.map((data, id) => (
          <pre key={data.id}>{JSON.stringify(data)}</pre>
        ))} */}
      <div>
        <h2> useEffect Hook</h2>
        {windowWidth}
      </div>
    </>
  );
};
