import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        number: state.number + 1,
      };

    case "Decrement":
      return {
        ...state,
        number: state.number - 1,
      };

    case "Reset":
      return {
        ...state,
        number: (state.number = 0),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
