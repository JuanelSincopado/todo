import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalState from "./context/Global-state";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>
);
