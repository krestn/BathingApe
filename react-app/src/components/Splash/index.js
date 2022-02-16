
import './Splash.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Splash() {
  return (


    <div className='splashPage'>
      <div className='leftsideSplash'>
          <img className='phone' src='/images/iphone.png' alt="iPhone" />
          <img className='bathing' src='/images/bathing.png' alt="bape" />
          <img className='mamo' src='/images/mamo.png' alt="mamo" />



      </div>
      <div className='rightSideSplash'>
        <div className='splashLayout'>
          <div className='splashFormContainer'>
            <img className="bape"src='/images/bape.png' alt='Bathing Ape'/>
            <form className='splashForm'>
              <input type="text" name="name" placeholder='Phone number, username, or email' />
              <input type="text" name="name" placeholder='Password' />

              <input type="submit" value="Log In" />
            </form>
            <div className='divider'>
              {/* <div className='line'></div> */}
              <p className='or'>  OR  </p>
              {/* <div className='line'></div> */}

            </div>
            <div>
              <button>Log in with Demo</button>
            </div>




          </div>

          <div className='signUpSplash'>
            <div className='signUpContainer'>

            <div>Don't have an account? 
            </div>

            <NavLink to='/signup'>{` Sign up`}</NavLink>
            </div>
          </div>

          <p>Get the app.</p>
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
