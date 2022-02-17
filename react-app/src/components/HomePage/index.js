import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Splash from '../Splash';


function HomePage(){

  const user = useSelector(state => state.session.user);

  if (!user) {

    return (
      <Splash/>
    )


  }

  else {
    return (
    <NavBar/>
    )
  }




}s

export default HomePage;
