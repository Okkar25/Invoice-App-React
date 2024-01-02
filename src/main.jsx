import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GeneralContextProvider from "./contexts/GeneralContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
