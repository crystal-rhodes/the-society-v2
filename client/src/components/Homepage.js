import React from 'react';
import {
    Query
} from 'react-apollo';
import {
    gql
} from 'apollo-boost'
import Client from '../apollo/config'
import Header from './Header';
import CreateUser from './Register/CreateUser'
import UserList from './UserList'
import LoginUser from './Login/LoginUser';
import { AUTH_TOKEN } from '../apollo/constants'
import Newsfeed from './Newsfeed';

const Homepage = ({isAuthenticated}) => {
    if (isAuthenticated) {
        return <div>
        <UserList/>
        <Newsfeed/>
        </div>
    }
    else {
        return <div>
        <UserList/>
        <LoginUser/>
        <CreateUser/>
    </div>
    }
}

export default Homepage;