import React, {
    Component
} from 'react'
import {
    graphql,
    compose
} from 'react-apollo';
import {
    getPosts
} from '../../apollo/queries/Query';
import PostListItem from './PostListItem';
import { updatePostList } from '../../apollo/queries/updatePost';
import { subscribeToComments } from '../../apollo/queries/Subscription'

class PostList extends Component {
    constructor(props) {
        super(props)

    }

    renderPosts = () => {
        if (this.props.data.loading) {
            return <div>Loading Posts</div>
        } else {
            return this.props.data.posts.map((post) => <PostListItem 
                    subscribe={this.props.data.subscribeToMore} 
                    key={post.id} 
                    post={post} />)
        }
    }

    render() {
        return <div>
            <h1>Post List</h1>
            {this.renderPosts()}
        </div>
    }
}

export default compose(
    graphql(getPosts),
    graphql(updatePostList)
    )
    (PostList)