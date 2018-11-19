import React, { Component } from 'react'
import { deleteUserMutation } from '../../apollo/queries/Mutation'
import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'
import {
    graphql, compose
} from 'react-apollo'
import { getMe } from '../../apollo/queries/Query'

class Settings extends Component {

    renderInfo = () => {
        if (this.props.data.loading) {
            return;
        } else {
            return  this.props.data.me
        }
    }

    render() {
        const me = this.renderInfo();

        console.log(me)

        return <div>
            <h1>Settings</h1>
            <UpdateUser me={me}/>

            <h2>Security</h2>
            <DeleteUser/>
        </div>
    }
}

export default graphql(getMe)(Settings)