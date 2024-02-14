import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/ModalContext/ModalContext";
import App from "./App";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ModalProvider>
  </React.StrictMode>
);
