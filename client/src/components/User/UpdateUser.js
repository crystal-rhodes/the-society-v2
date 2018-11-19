import React, { Component } from 'react'
import {
    graphql
} from 'react-apollo'
import { updateUserMutation } from '../../apollo/queries/Mutation'
import { ContainedButton } from '../common/Button'
import UpdateUserForm from './UpdateUserForm';

class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUpdate: false
        }
    }

    onUpdateAccountClicked = () => {
        this.setState({isUpdate: true})
    }
    
    render() {
        return <div>
            <h2>General Settings</h2>
            <UpdateUserForm/>

            <ContainedButton color="primary" onClick={this.onUpdateAccountClicked}>
                <h1>Update Account</h1>
            </ContainedButton>
        </div>
    }
}

export default graphql(updateUserMutation)(UpdateUser)