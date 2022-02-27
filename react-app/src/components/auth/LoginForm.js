import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../store/session.js";
import './LoginForm.css'
import bape2 from '../../assets/bape2.jpg'
import bape3 from '../../assets/bape3.jpg'
import bape4 from '../../assets/bape4.jpg'
import logo from '../../assets/bape.png'
import soap from '../../assets/soap.png'
import phone from '../../assets/iphone1.jpg'







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


    <div className="loginPage">






      <div className="login-body">

        <div className="login-right">
          <div className="login-title">
            <img className="loginLogo" src={logo} alt='Bathing Ape'></img>
            {/* <h1 className="loginLogo">Bathing Ape</h1> */}
          </div>
          <form className="login-form" onSubmit={onLogin}>
            <div className="errorsDiv">
              {errors.map((error, ind) => (
                <div className="display-errors" key={ind}>
                  * {error}
                </div>
              ))}
            </div>
            <div className="input-wrapper">
              <input
                className="login-input"
                placeholder="Email"

                name="email"
                type="text"
                required={true}
                value={email}
                onChange={updateEmail}
              />
              <label className="login-label"></label>
            </div>
            <div className="input-wrapper">
              <input
                className="login-input"
                name="password"
                type="password"
                placeholder="Password"

                required={true}
                value={password}
                onChange={updatePassword}
              />
              <label className="login-label"></label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <button className="demo-login-button" onClick={demoLogin}>
              Demo
            </button>
          </form>
        </div>
      </div>
      <div className="signupDiv">

        <div className="login-signup-con">
          Don't have an account? <NavLink className="signup" to="/sign-up">Sign Up</NavLink>
        </div>
      </div>

      <a href="https://www.linkedin.com/in/krestoncaldwell/" target="_blank">

        <div class="item1">
          <div class="polaroid"><img className="image" src={bape2} alt="photo" />
            <div class="links">LinkedIn</div>
          </div>
        </div>
      </a>

      {/* <div class="item">
        <div class="polaroid"><img className="image" src={bape3} alt="photo" />
          <div class="caption">Love ballons</div>
        </div>
      </div> */}


      <a href="https://github.com/krestn" target="_blank">

        <div class="item2">
          <div class="polaroid"><img className="image" src={bape4} alt="photo" />
            <div class="links">Github </div>
          </div>
        </div>

      </a>


      {/* <img className="soap" src={soap} alt="photo" /> */}
      <img className="phone" src={phone} alt="photo" />






    </div>
  );
};

export default LoginForm;
