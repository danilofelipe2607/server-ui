import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as oidcReducer } from "redux-oidc";
import authenticationReducer from "./authenticationReducer";
const reducer = combineReducers({
  routing: routerReducer,
  oidc: oidcReducer,
  authenticationReducer,
});

export default reducer;
