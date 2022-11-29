import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { MobileNavContextProvider } from "./context/NavContext";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatContextProvider>
    <AuthContextProvider>
      <MobileNavContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MobileNavContextProvider>
    </AuthContextProvider>
  </ChatContextProvider>
);
