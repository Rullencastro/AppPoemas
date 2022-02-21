import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    error: "",
  });
  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  },[]);
  const handleClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      signup();
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Error, las 2 contraseñas no coinciden",
      }));
    }
  };

  async function signup() {
    const response = await fetch("/api/auth/signup", {
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
      navigate("/login");
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Error en el registro de usuario",
      }));
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="login-card align-items-center w-25">
        <form>
          <div className="form-group text-left mb-2">
            <label htmlFor="username">{t("signup.username")}</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder={t("signup.enter-user")}
              value={state.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-2">
            <label htmlFor="exampleInputPassword1">
              {t("signup.password")}
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder={t("signup.enter-pass")}
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-3">
            <label htmlFor="exampleInputPassword1">
              {t("signup.confirm-password")}
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder={t("signup.enter-conf-pass")}
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-center mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              {t("signup.signup")}
            </button>
          </div>
          <p className="text-danger">{state.error}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
