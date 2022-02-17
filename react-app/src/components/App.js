import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import NavBar from './NavBar';
import ProtectedRoute from './auth/ProtectedRoute';
import UsersList from './UsersList';
import User from './User';
import { authenticate } from '../store/session';
import Splash from './Splash';
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true}>
          <Splash></Splash>
          <NavBar></NavBar>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
