import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Splash from '../Splash';
import NavBar from '../NavBar'


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
      </div>
    )
  }




}

export default HomePage;
