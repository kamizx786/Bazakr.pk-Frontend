import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import "./index.css";
import rootReducers from "./reducers";
const store = configureStore({ reducer: rootReducers }, composeWithDevTools());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
