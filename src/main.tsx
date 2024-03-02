import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/ModalContext";
import App from "./App";
import store from "./reduxToolkit/store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
