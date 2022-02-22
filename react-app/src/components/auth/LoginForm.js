import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../store/session.js";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (event) => {
    event.preventDefault();
    const dEmail = "demo@bape.com";
    const dPassword = "password";

    const data = await dispatch(login(dEmail, dPassword));

    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-body">
      <div className="login-left">
      </div>
      <div className="login-right">
        <h1 className="login-title">Bathing Ape</h1>
        <form className="login-form" onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div className="display-errors" key={ind}>
                * {error}
              </div>
            ))}
          </div>
          <div className="input-wrapper">
            <input
              className="login-input"
              name="email"
              type="text"
              required={true}
              value={email}
              onChange={updateEmail}
            />
            <label className="login-label">Email</label>
          </div>
          <div className="input-wrapper">
            <input
              className="login-input"
              name="password"
              type="password"
              required={true}
              value={password}
              onChange={updatePassword}
            />
            <label className="login-label">Password</label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button className="demo-login-button" onClick={demoLogin}>
            Demo
          </button>
        </form>
        <div className="login-signup-con">
          Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
