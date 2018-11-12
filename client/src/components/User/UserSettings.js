import React, { Component } from 'react'
import { deleteUserMutation } from '../../apollo/queries/Mutation'
import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'

class Settings extends Component {
    
    render() {
        return <div>
            <h1>Settings</h1>
            <UpdateUser/>
            <DeleteUser/>
        </div>
    }
}

export default Settings