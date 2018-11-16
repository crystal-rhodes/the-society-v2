import React, {
    Component
} from 'react'
import CommentListItem from './CommentListItem';
import graphql from 'graphql-anywhere';
import {
    getComments
} from '../../apollo/queries/Query';
import CreateComment from './CreateComment';

class CommentList extends Component {
    constructor(props) {
        super(props)
    }

    renderComments = () => {
        const {postId} = this.props

        return this.props.comments.map(comment => 
            <CommentListItem key={comment.id} postId={postId} comment={comment}/>)
    }
 
    render() {
        const {postId} = this.props

        return <div>
            {this.renderComments()}
            <CreateComment postId={postId} />
        </div>
    }
}

export default CommentList