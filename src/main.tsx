import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/ModalContext";
import App from "./App";
import { ShoppingBagProvider } from "./context/ShoppingBagContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <ShoppingBagProvider>
        <App />
      </ShoppingBagProvider>
    </ModalProvider>
  </React.StrictMode>
);
