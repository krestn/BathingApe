import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { signUp } from "../../store/session.js";
import logo from '../../assets/bape.png'


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
    return dispatch(signUp(username, email, password, repeatPassword, image))
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
    <div className="signup-body">
      <div className="login-title">
            <img className="loginLogo" src={logo} alt='Bathing Ape'></img>
            {/* <h1 className="loginLogo">Bathing Ape</h1> */}
          </div>
        <form className="login-form" onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind} className="errors">{error}</div>
            ))}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="login-input"
              name="username"
              onChange={updateUsername}
              value={username}
              required={true}
              placeholder='Username'
            ></input>
            {/* <label className="signup-label">Username</label> */}
          </div>
          <div className="input-wrapper">
            <input
            className="login-input"
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              required={true}
              placeholder='Email'
            ></input>
            {/* <label className="signup-label">Email</label> */}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              className="login-input"
              required={true}
              placeholder='Password'
            ></input>
            {/* <label className="signup-label">Password</label> */}
          </div>
          <div className="input-wrapper">
            <input
              className="login-input"

              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='Confirm password'
            ></input>
            {/* <label className="signup-label">Confirm Password</label> */}
          </div>
            <div className="avatar-upload-con">
                <p className="upP">Upload Profile Picture...</p>


                <input
                  type="file"
                  onChange={updateImage}
                  id="file-upload"
                  className="hide-upload-button"
          />
             
            </div>
          <button type="submit" className="login-button">Sign Up</button>
        </form>
        <div className="sign-up-login-con">
          Have an account? <NavLink to="/login" className='signup'>Login</NavLink>
        </div>
    </div>
  );
};

export default SignUpForm;
