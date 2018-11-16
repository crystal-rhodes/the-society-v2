import React, {
    Component
} from 'react'
import PostForm from './PostForm';
import {
    compose,
    graphql
} from 'react-apollo'
import {
    getMe
} from '../../apollo/queries/Query'
import {
    createPostMutation
} from '../../apollo/queries/Mutation'
import { getPosts } from '../../apollo/queries/Query'

class CreatePost extends Component {
    onSubmit = (user) => {
        console.log(this.props)

        const {
            id
        } = this.props.data.me
        const {
            title,
            body,
            published
        } = user

        this.props.mutate({
            variables: {
                data: {
                    title,
                    body,
                    published,
                }
            },
            refetchQueries: [{ query: getPosts }]
        }).then(res => console.log(res)) 
    }

    render() {
        return <PostForm onSubmit={this.onSubmit}/>
    }
}

export default compose(
    graphql(getMe),
    graphql(createPostMutation)
)(CreatePost)