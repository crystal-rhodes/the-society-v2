import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getPosts } from '../../apollo/queries/Query';
import PostListItem from './PostListItem';

class PostList extends Component {
    constructor(props) {
        super(props)
    }

    renderPosts = () => {
        if (this.props.data.loading) {
            return <div>Loading Posts</div>
        }   else {
            return this.props.data.posts.map((post) => <PostListItem key={post.id} post={post} />)
        }
    }

    render() {
        return <div>
            <h1>Post List</h1>
            {this.renderPosts()}
        </div>
    }
}

export default graphql(getPosts)(PostList)