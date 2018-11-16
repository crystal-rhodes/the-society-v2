import React, {
    Component
} from 'react'
import {
    OutlinedButton
} from '../common/Button';
import {
    graphql,
    compose
} from 'react-apollo';
import {
    getMe,
    getComments,
    getPost
} from '../../apollo/queries/Query';
import {
    deleteCommentMutation, updateCommentMutation
} from '../../apollo/queries/Mutation';
import CommentForm from './CommentForm'


class CommentListItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdit: false
        }
    }

    onDelete = () => {
        const {
            id
        } = this.props.comment

        const { postId } = this.props

        this.props.deleteComment({
            variables: {
                id
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

    onEditClicked = () => {
        this.setState({
            isEdit: true
        })
    }

    onCancel = () => {
        this.setState({
            isEdit: false
        })
    }

    onEditSubmit = (text) => {
        console.log(text)

        const { postId } = this.props

        this.props.updateComment({
            variables: {
                id: this.props.comment.id,
                data: {
                    text
                }
            },
            refetchQueries: [{
                query: getPost,
                variables: {
                    id: postId
                }
            }]
        }).then(res => {
            this.setState({
                isEdit: false
            })
        })
        .catch(err => console.log(err))
    }

    render() {

        const {
            author,
            text,
            post
        } = this.props.comment

        const {
            me
        } = this.props.data

        const isPostOwner = post.author.id === me.id
        const isCommentOwner = me.id === author.id
        return <div>
     
        {!this.state.isEdit ? <div>    
            <h3>{author.name}</h3>
            {text}

            {isCommentOwner &&
            <OutlinedButton size="medium" color="primary" onClick={this.onEditClicked}>
                Edit
            </OutlinedButton>}
                
            {(isCommentOwner || isPostOwner)  &&
            <OutlinedButton size="medium" color="secondary" onClick={this.onDelete}>
                Delete
            </OutlinedButton>}
        </div> : <div>
            <CommentForm text={text} onCancel={this.onCancel} onEditSubmit={this.onEditSubmit}/>

 
        </div> } 




    </div>
    }
}

export default
compose(
    graphql(getMe),
    graphql(updateCommentMutation, {name: "updateComment"}),
    graphql(deleteCommentMutation, {name: "deleteComment"})
)(CommentListItem)