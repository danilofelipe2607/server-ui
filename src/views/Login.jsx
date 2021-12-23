import { useState } from "react";
import "../css/styles.css";
import PropTypes from "prop-types";
import { signIn } from "../actions/autentication";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [pass, setPass] = useState(null);
  const [username, setUsername] = useState(null);

  const handleSubmit = (event) => {
    const rememberMe = true;
    event.preventDefault();
    const qs = queryString.parse(window.location.search);
    dispatch(signIn(username, pass, rememberMe, qs.returnUrl));
  };

  const { isLoading, error, data } = useSelector(
    (state) => state.authenticationReducer
  );
  if (isLoading) {
    return (
      <section className="container">
        <p>Signing in...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container">
        <p>There was an error signing in.</p>
      </section>
    );
  }

  if (data) {
    window.location.href = data.uri;
    return <div />;
  }
  return (
    <section>
      <section className="container">
        {/* <img src={avatar} className="avatar" alt="avatar" /> */}
        <p>LOGIN TRON ID</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              aria-describedby="emailHelp"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="input__label">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className="form-control login_text_field_bg input-style"
              placeholder="password"
              required
            />
          </div>
          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </section>
  );
}

Login.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.object,
};
