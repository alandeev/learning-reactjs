import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
// import Page404 from '../pages/Page404';

// import Header from '../components/Header';

export default function Routes(){
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth' exact component={Login} />
      <Route path='/signup' exact component={SignUp} />
    </Switch>
  )
}