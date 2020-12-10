import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function MyRoute({ component: Component, isClosed = false , ...rest }){
  const isLoggedIn = false;

  if(isClosed && !isLoggedIn){
    return (
      <Redirect
        to={{ pathname: '/auth', state: { prevPath: rest.location.pathname } }}
      />
    )
  }

  return <Route {...rest} component={Component} />
}