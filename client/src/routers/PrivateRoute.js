import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import { AUTH_TOKEN } from '../apollo/constants'

const isAuthenticated = !!localStorage.getItem(AUTH_TOKEN)

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {

  return <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props} isAuthenticated={true}/>
      ) : (
        <Redirect to="/" />
        )
    )} />
  };

export default PrivateRoute