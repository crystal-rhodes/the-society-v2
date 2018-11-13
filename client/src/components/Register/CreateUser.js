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


class createUser extends Component {
    onSubmit = (user) => {
        console.log(user)
        
        this.props.mutate({
                variables: {
                    data: {
                        name: user.firstName + ' ' + user.lastName,
                        birthDate: moment(user.birthDate).unix(),
                        email: user.email,
                        password: user.password,
                        gender: user.gender
                    }
                }, 
                refetchQueries: [{ query: getUsers }]
            }).then((res) => {
                console.log(res.data)
                return <Redirect to='/'/>
            })
            .catch((e) => console.log(e))
    }

    render() {
        return <div>
            <RegisterForm onSubmit={this.onSubmit}/>
        </div>
    }
}

export default graphql(createUserMutation)(createUser)