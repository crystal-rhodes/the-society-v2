import React, { Component } from 'react'
import CommentListItem from './CommentListItem';

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    render() {
        return <div>
            <h4>Comment List</h4>
            <CommentListItem />
        </div>
    }
}

export default CommentList