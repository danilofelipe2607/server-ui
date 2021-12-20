import authenticationService from "../services/authentication-service";
import { SIGN_IN_START } from "../reducers/authenticationReducer";

export const singInStart = (response) => ({
  type: SIGN_IN_START,
  payload: response,
});

// export const signIn = () => ({
//   type: SIGN_IN_START,
//   promise: authenticationService.signIn(),
// });

// export const signIn = async (
//   username,
//   password,
//   rememberLogin,
//   redirectUrl
// ) => {
//   const teste = await authenticationService.signIn(
//     username,
//     password,
//     rememberLogin,
//     redirectUrl
//   );
//   console.log(teste, "teste");
// };

export const signIn =
  (username, password, rememberLogin, redirectUrl) => async (dispatch) => {
    return {
      type: SIGN_IN_START,
      promise: authenticationService.signIn(
        username,
        password,
        rememberLogin,
        redirectUrl
      ),
    };
  };
