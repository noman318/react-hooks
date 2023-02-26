/* eslint-disable no-unused-vars */
import React from "react";
import { useTheme, useUpdateTheme } from "../ThemeContext";

export const Context = () => {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();
  const styleTheme = {
    backgroundColor: darkTheme ? "rgb(0 0 0)" : "rgb(240 240 240)",
    color: darkTheme ? "rgb(240 240 240)" : "rgb(0 0 0)",
    padding: "10rem",
    margin: "5rem",
  };

  return (
    <>
      <div style={styleTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};
