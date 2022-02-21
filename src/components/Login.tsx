import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setToken } from "../store/tokenSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  async function login() {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: state.username,
        password: state.password,
      }),
    });
    if (response.status === 200) {
      const responseJson = await response.json();
      dispatch(setToken(responseJson.token));
      navigate("/list");
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Usuario o contraseña incorrectos",
      }));
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="login-card align-items-center w-25">
        <form>
          <div className="form-group text-left mb-2">
            <label htmlFor="username">{t("login.username")}</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder={t("login.enter-user")}
              value={state.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-3">
            <label htmlFor="exampleInputPassword1">{t("login.password")}</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder={t("login.enter-pass")}
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-center mb-3">
            <button type="button" className="btn btn-primary" onClick={login}>
              {t("login.login")}
            </button>
          </div>
          <small className="form-text text-muted mb-3">
            {t("login.not-account")}{" "}
            <a href="http://localhost:3000/signup">{t("login.here")}</a>
          </small>
          <p className="text-danger mt-3">{state.error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
