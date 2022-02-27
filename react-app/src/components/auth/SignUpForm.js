import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { signUp } from "../../store/session.js";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [image, setImage] = useState(null);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    setErrors([])
    return dispatch(signUp(username, email, password, image, repeatPassword))
      .then((response) => {
        if (response?.errors) {
          setErrors(response.errors);
          response.errors.forEach((ele) => {
            console.log("ele", ele);
            if (ele.includes("Username")) setUsername("");
            if (ele.includes("address")) setEmail("");
          });
          setPassword("");
          setRepeatPassword("");
          errors.forEach((ele) => {
            console.log("ele", ele);
            if (ele.includes("Username")) setUsername("");
            if (ele.includes("address")) setEmail("");
          });
          return
        }
        else if (!response?.errors) return;
      })
  };










  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sign-up-body">
      <div className="sign-up-left">
      </div>
      <div className="sign-up-right">
        <h1 id="sign-up-title">Bathing Ape</h1>
        <form className="sign-up-form" onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind} className="errors">{error}</div>
            ))}
            {console.log(errors)}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="signup-input"
              name="username"
              onChange={updateUsername}
              value={username}
              required={true}
            ></input>
            <label className="signup-label">Username</label>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              required={true}
            ></input>
            <label className="signup-label">Email</label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              required={true}
            ></input>
            <label className="signup-label">Password</label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
            <label className="signup-label">Confirm Password</label>
          </div>
          <label for="file-upload" className="file-input-con">
            <div className="avatar-upload-con">
              <div className="file-button-con">
                <p>Upload File...</p>
              </div>
              <p
              // src={image && URL.createObjectURL(image)}
              >Avatar</p>
            </div>
          </label>
          <input
            type="file"
            onChange={updateImage}
            id="file-upload"
            className="hide-upload-button"
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="sign-up-login-con">
          Have an account? <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
