/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { Context } from "./hooks/Context";
import { Effect } from "./hooks/Effect";
import { State } from "./hooks/State";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>Let's Hook up with React hooks</h1>
      {/* <State /> */}
      {/* <Effect /> */}
      <ThemeProvider>
        <Context />
      </ThemeProvider>
    </div>
  );
}

export default App;
