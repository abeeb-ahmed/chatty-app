import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { MobileNavContextProvider } from "./context/NavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MobileNavContextProvider>
    <AuthContextProvider>
      <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatContextProvider>
    </AuthContextProvider>
  </MobileNavContextProvider>
);
