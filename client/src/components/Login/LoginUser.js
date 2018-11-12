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
                if (res.data.login.token !== undefined) {
                    this._saveUserData(res.data.login.token)
                    console.log('Login successfully')

                    window.location.reload()
                }
            })
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {
        return <LoginForm onSubmit={this.onSubmit}/>
    }
}

export default withRouter(graphql(loginMutation)(LoginUser))