import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Splash from '../Splash';
import NavBar from '../NavBar'
import UserImages from '../UserImages';


function HomePage() {

  const user = useSelector(state => state.session.user);

  if (!user) {

    return (
      <Splash />
    )


  }

  else {
    return (
      <div>
        <p>Logged in as {user.username}</p>
        <NavBar />
        <UserImages />
      </div>
    )
  }




}

export default HomePage;
