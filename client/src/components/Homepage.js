import React from 'react';
import {
    Query
} from 'react-apollo';
import {
    gql
} from 'apollo-boost'
import Client from '../apollo/config'
import Header from './Header';
import RegisterForm from './RegisterForm'

const getUsers = gql `
    query {
        users {
            id
            name
        }
    }
`

Client.query({
    query: getUsers
}).then(res => console.log(res));

const Homepage = () => (
    <div>
        <Header />
        <RegisterForm />
  </div>
)

export default Homepage;