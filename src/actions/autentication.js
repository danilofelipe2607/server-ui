import {
  LOAD_FOO_STARTED,
  LOAD_FOO_FAILED,
  LOAD_FOO_SUCCESS,
} from "../reducers/authenticationReducer";
import apiService from "../services/api-service";

export const signIn =
  (username, password, RememberLogin) => async (dispatch) => {
    try {
      dispatch({ type: LOAD_FOO_STARTED, payload: null });
      const Credenciais = {
        Usuario: "admin@tron.com.br",
        Senha: "T77r@18n",
        RememberLogin,
        ReturnUrl: "ReturnUrl",
      };
      const { data } = await apiService.post(
        "/api/autenticacao/login",
        Credenciais
      );
      if (data) {
        dispatch({ type: LOAD_FOO_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: LOAD_FOO_FAILED, error: true, payload: error });
    }
  };
