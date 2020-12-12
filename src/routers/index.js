import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './my_route'

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Page404 from '../pages/Page404';

export default function Routes(){
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth' exact component={Login} />
      <Route path='/signup' exact component={SignUp} />
      <Route path='*' component={Page404} />
    </Switch>
  )
}