import React, { Component } from 'react'
import {
    graphql, compose
} from 'react-apollo'
import { getMe } from '../../apollo/queries/Query'
import { ContainedButton } from '../common/Button'
import { TextField, withStyles } from '@material-ui/core';


const styles = {

}

class UpdateUserForm extends Component {
    constructor(props) {
        super(props)
        
        
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onSubmit = () => {
        
    }

    renderInfo = () => {



    }
    
    render() {
        console.log(this.props.me)
        return <form onSubmit={this.onSubmit}>
            {this.renderInfo()}
            <h4>Email</h4>
                <TextField type="email" value={this.state.email} /> 
            <h4>Name</h4>
                <TextField value={this.state.name} /> 
            <h4>Password</h4>
                <TextField type="password" value={this.state.password} /> 
            <ContainedButton color="primary">
                Save
            </ContainedButton>
        </form>
    }
}

export default compose(
    graphql(getMe),
    withStyles(styles)
) (UpdateUserForm)