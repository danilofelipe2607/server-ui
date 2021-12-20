import { createStore, applyMiddleware, compose } from "redux";
import { middleware as reduxPackMiddleware } from "redux-pack";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import reducers from "../reducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const logger = createLogger();
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk, reduxPackMiddleware))
);
export default store;
