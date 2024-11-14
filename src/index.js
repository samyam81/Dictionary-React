import React from "react";
import ReactDOM from "react-dom/client";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div
      style={{
        margin: 30,
        fontSize: "32px",
        textAlign: "center",
        border: "1px solid white", 
      }}
    >
      <Dictionary />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
