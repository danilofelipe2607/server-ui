import apiService from "./api-service";
import queryString from "query-string";

class AuthenticationService {
  signIn(username, password, rememberLogin, returnUrl) {
    const Credenciais = {
      Usuario: username,
      Senha: password,
    };
    return apiService.post("/api/autenticacao/login", Credenciais);
  }

  getSignOutContext(signOutId) {
    const qs = queryString.stringify({ signOutId });
    return apiService.get(`/api/sign-out-context?${qs}`);
  }

  getSignedOutContext(signOutId) {
    const qs = queryString.stringify({ signOutId });
    return apiService.get(`/api/signed-out-context?${qs}`);
  }

  signOut(signOutId) {
    return apiService.post(`/api/sign-out`, {
      signOutId,
    });
  }
}

export default new AuthenticationService();
