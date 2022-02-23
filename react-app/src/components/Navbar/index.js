import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './Navbar.css'

import SelectImagePage from "../SelectImagePage";
import { useSelector } from "react-redux";







const NavBar = () => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [userDrop, setUserDrop] = useState(false);

  const [imageSelectPopup, setImageSelectPopup] = useState(false);

  const goToProfile = (userId) => {
    history.push(`/users/${userId}`);
  };


  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <NavLink to="/" id="site-title">
          Bathing Ape
        </NavLink>
        <div className="bape">
          <p>Bathing Ape</p>
        </div>
      </div>

      <ul className="nav-bar-right">
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            <p className="nav-icon">Home</p>
          </NavLink>
        </li>
        <li>
          <p
            className="nav-icon"
            onClick={() => {
              setImageSelectPopup(true);
            }}>+</p>
          <SelectImagePage
            trigger={imageSelectPopup}
            setTrigger={setImageSelectPopup}
          />
        </li>
        {/* <li>
          <NavLink to="/posts">
            <p className="nav-icon">Earth</p>
          </NavLink>
        </li> */}
        <li>
          <p
            // srcSet={user.avatar}
            onClick={() => setUserDrop(!userDrop)}
            className="nav-icon"
            sx={{ width: 28, height: 28 }}>Avatar</p>
        </li>
        {userDrop && (
          <li className="user-dropdown">
            <div className="user-info">
              {user && (
                <>
                  <p
                    // srcSet={user.avatar}
                    className="nav-avatar"
                    onClick={(event) => goToProfile(user.id)}>Avatar</p>
                  <div onClick={(event) => goToProfile(user.id)}>
                    <div className="dropdown-username">{user.username}</div>
                    <div className="dropdown-email">{user.email}</div>
                  </div>
                </>
              )}
            </div>
            <LogoutButton />
          </li>
        )}
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
          Users
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
