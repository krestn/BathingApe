
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import AddImageModal from '../AddImageModal'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavContainer'> 
        {/* <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        <img src='/images/bape.png' alt=''></img>
        <div className=''>
          <AddImageModal />
        </div>

        <div className='logout'>
          <LogoutButton />
        </div>
    </nav>
  );
}

export default NavBar;
