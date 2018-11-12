import React, { Component } from 'react'
import {
    graphql
} from 'react-apollo'
import { updateUserMutation } from '../../apollo/queries/Mutation'
import { ContainedButton } from '../common/Button'
import { AUTH_TOKEN } from '../../apollo/constants'
import { Redirect } from 'react-router-dom';
import { OutlinedTextField } from '../common/TextField';

class UpdateUser extends Component {
    onUpdateAccountClicked = () => {
        
    }
    
    render() {
        return <form>
            <OutlinedTextField
                defaultValue="asdfasdfasdf"
            />
            <ContainedButton color="primary" onClick={this.onUpdateAccountClicked}>
                <h1>Update Account</h1>
            </ContainedButton>
        </form>
    }
}

export default graphql(updateUserMutation)(UpdateUser)