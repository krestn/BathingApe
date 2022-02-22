import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogOutButton";
import {
  // HomeIcon,
  // PlusCircleIcon,
  // GlobeIcon,
} from "@heroicons/react/outline";
import { IoHomeOutline, IoAddCircleOutline, IoEarthOutline } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import SelectImagePage from "../SelectImagePage";
import "./Navbar.css";
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

        <ul className="nav-bar-right">
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <IoHomeOutline size={"28px"} className="nav-icon" width={64} />
            </NavLink>
          </li>
          <li>
            <IoAddCircleOutline
              size={"28px"}
              className="nav-icon"
              onClick={() => {
                setImageSelectPopup(true);
              }}
            />
            <SelectImagePage
              trigger={imageSelectPopup}
              setTrigger={setImageSelectPopup}
            />
          </li>
          <li>
            <NavLink to="/posts">
              <IoEarthOutline className="nav-icon" size={"28px"} />
            </NavLink>
          </li>
          <li>
            <Avatar
              srcSet={user.avatar}
              onClick={() => setUserDrop(!userDrop)}
              className="nav-icon"
              sx={{ width: 28, height: 28 }}
            />
          </li>
          {userDrop && (
            <li className="user-dropdown">
              <div className="user-info">
                {user && (
                  <>
                    <Avatar
                      srcSet={user.avatar}
                      className="nav-avatar"
                      onClick={(event) => goToProfile(user.id)}
                    />
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
