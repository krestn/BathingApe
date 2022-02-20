
import './Splash.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
function Splash() {
  return (


    <div className='splashPage'>
      <div className='leftsideSplash'>
        <img className='phone' src='/images/iphone.jpg' alt="iPhone" />
        {/* <img className='bathing' src='/images/bathing.png' alt="bape" />
        <img className='mamo' src='/images/mamo.png' alt="mamo" /> */}



      </div>
      <div className='rightSideSplash'>
        <div className='splashLayout'>
          <div className='splashFormContainer'>
            <img className="bape" src='/images/bape.png' alt='Bathing Ape' />
            <div className='splashFormContainer'>
        
              <LoginForm></LoginForm>

            </div>
            <div className='divider'>
              {/* <div className='line'></div> */}
              <p className='or'>  OR  </p>
              {/* <div className='line'></div> */}

            </div>
            <div>
              <button className='demo'>Log in with Demo</button>
            </div>




          </div>

          <div className='signUpSplash'>
            <div className='signUpContainer'>

              <div className="noAccount" >Don't have an account?
              </div>

              <NavLink classame='signUpLink' to='/signup'>{` Sign up`}</NavLink>
            </div>
          </div>

          <p className='getApp'>Get the app.</p>
          <div>
            <img className='splashButton' src='/images/button1.png' alt='button' />
            <img className='splashButton' src='/images/button2.png' alt='button' />

          </div>


        </div>

      </div>
      <div className='SplashFooter'>
        <div></div>
        <div></div>
        <div></div>
      </div>




    </div>
  )
}

export default Splash;
