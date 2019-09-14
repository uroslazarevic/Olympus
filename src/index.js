import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import promise from "redux-promise";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import { logger, crashReporter } from "./reducers/middlewares";
import { App } from "./app/App";

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk, logger, crashReporter)(createStore);
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.querySelector("#root")
);
