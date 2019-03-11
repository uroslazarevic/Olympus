import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reduxThunk from "redux-thunk";

import "./App.css";

import reducers from "./reducers";
import AppRouter from "router/AppRouter";

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(
  createStore
);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <AppRouter />
  </Provider>,
  document.querySelector("#root")
);
