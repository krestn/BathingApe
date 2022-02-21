import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Splash from '../Splash';
import NavBar from '../NavBar'
import UserImages from '../UserImages';
import "./HomePage.css"


function HomePage() {

  const user = useSelector(state => state.session.user);

  if (!user) {

    return (
      <Splash />
    )


  }

  else {
    return (
      <div className='homePage'> 
        <NavBar />
        <UserImages />
        <div className='profile'></div>
        <div className='friends'></div>
      </div>
    )
  }




}

export default HomePage;
