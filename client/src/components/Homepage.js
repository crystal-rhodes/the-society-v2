import React from 'react';
import {
    Query
} from 'react-apollo';
import {
    gql
} from 'apollo-boost'
import client from '../apollo/config'

const getUsers = gql `
    query {
        users {
            id
            name
        }
    }
`

client.query({
    query: getUsers
}).then(res => console.log(res));

const Homepage = () => (
    <div>
    <div>
        <h1 className="header-main">The Society Network</h1>
    </div>
    <div>
      
    </div>
  </div>
)

export default Homepage;