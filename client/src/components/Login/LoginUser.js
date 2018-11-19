import React, {
    Component
} from 'react'
import {
    loginMutation
} from '../../apollo/queries/Mutation'
import {
    graphql
} from 'react-apollo'
import LoginForm from './LoginForm';
import {
    AUTH_TOKEN
} from '../../apollo/constants'
import { withRouter } from 'react-router'
import {
    Redirect
} from 'react-router-dom'


class LoginUser extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            loginFailed: false,
            loginAttempt: 0
        }
    }

    onSubmit = (user) => {
        this.props.mutate({
                variables: {
                    data: {
                        email: user.email,
                        password: user.password
                    }
                }
            })
            .then((res) => {
                // response includes a token to be added to localStorage
                if (res.data.login.token !== undefined) {
                    this._saveUserData(res.data.login.token)
                    console.log('Login successfully')

                    window.location.reload()
                }
            })
            .catch((err) => {
                console.log(err.message)
                this.setState({
                    loginFailed: true,
                    loginAttempt: this.state.loginAttempt + 1
                })
            })
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {
        return <LoginForm 
            loginFailed={this.state.loginFailed} 
            loginAttempt={this.state.loginAttempt}
            onSubmit={this.onSubmit}/>
    }
}

export default withRouter(graphql(loginMutation)(LoginUser))