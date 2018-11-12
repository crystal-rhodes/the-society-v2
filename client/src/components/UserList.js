import React from 'react'
import {
    getUsers
} from '../apollo/queries/Query'
import {
    graphql
} from 'react-apollo'

class UserList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderUsers() {
        return (this.props.data.users.map((user) => {
            return <li key={user.id} className="collection-item">
            Name: {user.name}<br/>Email: {user.email}<br/>Password: {user.password}
            
            </li>

        }))
    }

    render() {
        if (this.props.data.loading) return <div>...Loading...</div>

        return (<div>
            <h3>User List</h3>
            <ul className="collection">{this.renderUsers()}</ul>
            </div>
        )
    }
}

export default graphql(getUsers)(UserList)