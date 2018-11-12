import React, { Component } from 'react'
import {
    graphql
} from 'react-apollo'
import { deleteUserMutation } from '../../apollo/queries/Mutation'
import { ContainedButton } from '../common/Button'
import { AUTH_TOKEN } from '../../apollo/constants'
import { Redirect } from 'react-router-dom';

class DeleteUser extends Component {
    onDeleteAccountClicked = () => {
        this.props.mutate({})
        .then((res) => {
            console.log(res)
            console.log(`${res.data.deleteUser.name} has been successfully deleted`);

            localStorage.removeItem(AUTH_TOKEN);

            window.location.reload()
        })
        .catch((err) => console.log(err))
    }
    
    render() {
        return <ContainedButton color="secondary" onClick={this.onDeleteAccountClicked}>
            <h1>Delete Account</h1>
        </ContainedButton>
    }
}

export default graphql(deleteUserMutation)(DeleteUser)