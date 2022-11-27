import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { MobileNavContextProvider } from "./context/NavContext";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MobileNavContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MobileNavContextProvider>
  </AuthContextProvider>
);
