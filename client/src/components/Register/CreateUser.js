import React, {
    Component
} from 'react'
import RegisterForm from './RegisterForm'
import {
    createUserMutation
} from '../../apollo/queries/Mutation'
import {
    graphql
} from 'react-apollo'
import moment from 'moment';
import {
    Redirect
} from 'react-router-dom'
import { getUsers } from '../../apollo/queries/Query';
import {
    AUTH_TOKEN
} from '../../apollo/constants'

class createUser extends Component {
    onSubmit = (user) => {
        console.log(user)
        
        this.props.mutate({
                variables: {
                    data: {
                        name: user.firstName + ' ' + user.lastName,
                        birthDate: user.birthDate,
                        email: user.email,
                        password: user.password,
                        gender: user.gender
                    }
                }, 
                refetchQueries: [{ query: getUsers }]
            }).then((res) => {
                if (res.data.createUser.token !== undefined) {
                    this._saveUserData(res.data.createUser.token)
                    console.log('Login successfully')

                    window.location.reload() 
                }
            })
            .catch((e) => console.log(e))
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {
        return <div>
            <RegisterForm onSubmit={this.onSubmit}/>
        </div>
    }
}

export default graphql(createUserMutation)(createUser)