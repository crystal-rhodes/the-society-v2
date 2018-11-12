import React from 'react';
import {
    Router,
    Route,
    Switch,
    Link,
    NavLink,
    BrowserRouter
} from 'react-router-dom';

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import HomePage from '../components/Homepage'
import Header from '../components/Header'
import Newsfeed from '../components/Newsfeed'
import Settings from '../components/User/UserSettings'
import NotFoundPage from "../components/NotFoundPage"
import Profile from "../components/UserProfile"

export default () => (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PrivateRoute path="/newsfeed" component={Newsfeed} exact={true} />
        <PrivateRoute path="/settings" component={Settings} exact={true} />
        <PrivateRoute path="/:name" component={Profile} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)