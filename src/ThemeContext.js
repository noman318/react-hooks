/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
