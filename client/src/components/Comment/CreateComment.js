import React, {
    Component
} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withStyles
} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CommentForm from './CommentForm';
import {
    compose,
    graphql
} from 'react-apollo'
import {
    getMe, getPost
} from '../../apollo/queries/Query'
import {
    createCommentMutation
} from '../../apollo/queries/Mutation'
import { getComments, getPosts } from '../../apollo/queries/Query'
import gql from 'graphql-tag'

class CreateComment extends Component {
    onSubmit = (comment) => {
        const {postId} = this.props

        const { text } = comment

        this.props.mutate({
            variables: {
                data: {
                    text,
                    post: postId
                }
            },
            refetchQueries: [{
                query: getPost,
                variables: {
                    id: postId
                }
            }]
            
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return <CommentForm  onSubmit={this.onSubmit}/>
    }
}

export default compose(
    graphql(getMe),
    graphql(createCommentMutation)
)(CreateComment)