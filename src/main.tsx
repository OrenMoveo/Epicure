import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/ModalContext/ModalContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
