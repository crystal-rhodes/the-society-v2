import React from 'react';
import { Route, Link } from 'react-router-dom';

import { AUTH_TOKEN } from '../apollo/constants'

const isAuthenticated = !!localStorage.getItem(AUTH_TOKEN)

const PublicRoute = ({
  component: Component,
  ...rest
}) => {

  return <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props} isAuthenticated={true}/>
      ) : (
          <Component {...props} isAuthenticated={false}/>
        )
    )} />
  };

export default PublicRoute