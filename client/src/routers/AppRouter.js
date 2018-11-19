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
import Settings from '../components/User/UserSettings'
import NotFoundPage from "../components/NotFoundPage"
import Profile from "../components/UserProfile"
import Search from '../components/Search/Search'
import Header from '../components/Header';
import ForgotPassword from '../components/Post/ForgotPassword';

export default () => (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PublicRoute path="/search" component={Search} />
        <PrivateRoute path="/settings" component={Settings} exact={true} />
        <PublicRoute path="/forgotpassword" component={ForgotPassword} exact={true} />
        <PrivateRoute path="/:name" component={Profile} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)