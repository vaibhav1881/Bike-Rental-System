import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWrapper from "./AppWrapper";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper /> {/* Wrap the app with AppWrapper to provide UserContext */}
  </React.StrictMode>
);

reportWebVitals();
