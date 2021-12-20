import { handleActions } from "redux-actions";
import { handle } from "redux-pack";
import { fromJS } from "immutable";
import authenticationService from "../services/authentication-service";
export const SIGN_IN_START = "SIGN_IN_START";

const initialState = fromJS({
  isLoading: false,
  data: null,
  error: null,
});

function reducer(state = initialState, action) {
  console.log(state, action, "helllo");
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_START:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          isLoading: true,
          error: null,
        }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({ ...prevState, data: payload }),
      });
    default:
      return state;
  }
}
export default reducer;

// export const signIn = (username, password, rememberLogin, redirectUrl) => ({
//   type: SIGN_IN_START,
//   promise: authenticationService.signIn(
//     username,
//     password,
//     rememberLogin,
//     redirectUrl
//   ),
// });
