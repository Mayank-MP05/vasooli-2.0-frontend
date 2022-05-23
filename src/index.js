import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Redux Setup
import { store } from "./redux/store";
import { Provider } from "react-redux";
import 'flowbite';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
