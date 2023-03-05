/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { Context } from "./hooks/Context";
import { Effect } from "./hooks/Effect";
import { LayoutEffect } from "./hooks/LayoutEffect";
import { Memo } from "./hooks/Memo";
import { Ref } from "./hooks/Ref";
import { State } from "./hooks/State";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>React hooks</h1>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <ThemeProvider>
        <Context />
      </ThemeProvider> */}
      {/* <Ref /> */}
      {/* <Memo /> */}
      <LayoutEffect />
    </div>
  );
}

export default App;
