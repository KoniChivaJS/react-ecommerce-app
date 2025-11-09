import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/shared/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
