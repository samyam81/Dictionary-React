import React from "react";
import Dictionary from "./Dictionary";

function App(params) {
  return (
    <div
      style={{
        margin: 30,
        fontSize: "32px",
        textAlign: "center",
      }}
    >
      Dictionary-React
      <Dictionary />
    </div>
  );
}

export default App;
