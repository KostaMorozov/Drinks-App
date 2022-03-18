import React from "react";
import ReactDOM from "react-dom";
import DrinksPage from "./components/DrinksPage/DrinksPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DrinksPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
