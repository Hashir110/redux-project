import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import the Provider from react-redux
import { store } from "./app/store"; // Import your Redux store
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);