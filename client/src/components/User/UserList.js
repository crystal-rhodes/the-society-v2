import React from 'react'
import {
    getUsers
} from '../../apollo/queries/Query'
import {
    graphql
} from 'react-apollo'
import UserListItem from './UserListItem'
class UserList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderUsers() {
        return (this.props.data.users.map((user) => {
            return <UserListItem key={user.id} user={user}/>
        
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