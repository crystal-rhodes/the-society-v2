import React, {
    Component
} from 'react'
import {
    SimpleCard
} from '../common/Card'
import Typography from '@material-ui/core/Typography';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    graphql,
    compose,
    Subscription
} from 'react-apollo';
import CardActions from '@material-ui/core/CardActions';
import CommentList from '../Comment/CommentList';
import {
    ContainedButton
} from '../common/Button';
import {
    updatePostMutation,
    deletePostMutation
} from '../../apollo/queries/Mutation'
import {
    getPosts,
    getMe,
    getPost
} from '../../apollo/queries/Query';
import moment from 'moment';
import PostForm from './PostForm';
import { subscribeToComments } from '../../apollo/queries/Subscription'

const styles = {
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class PostListItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdit: false,
            isSubscribed: false
        }
    }

    onEditClicked = (data) => {
        this.setState({
            isEdit: true
        })
    }

    onEditSubmit = (data) => {
        console.log(data)

        const {
            title,
            body,
            published
        } = data

        this.props.updatePost({
            variables: {

                id: this.props.post.id,
                data: {
                    title,
                    body,
                    published
                }
            },
            refetchQueries: [{
                query: getPost,
                variables: {
                    id: this.props.post.id
                }
            }]
        }).then(res => {
            this.setState({
                isEdit: false
            })
        })
        .catch(err => console.log(err.message))


    }

    onCancel = () => {
        this.setState({
            isEdit: false
        })
    }

    onDelete = () => {
        this.props.deletePost({
            variables: {
                id: this.props.post.id
            },
            refetchQueries: [{
                query: getPosts
            }]
        })
    }

    SubscribeToComments = () => (
        <Subscription
            subscription={subscribeToComments}
            variables={{ postId: this.props.post.id }}
        >
        {({ data, loading }) => {

        }}
        </Subscription>
    )

    onSubscribe = () => {

        if (!this.state.isSubscribed) {
            this.unsubscribe = this.props.subscribe({
                document: subscribeToComments,
                variables: {
                    postId: this.props.post.id
                },
                updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    console.log(subscriptionData.data)
                },
                onError: (err) => console.log(err)
            })
        } else {
            this.unsubscribe()
        }

        this.setState({
            ...this.state,
            isSubscribed: !this.state.isSubscribed
        })
    }

    render() {

        const {
            classes
        } = this.props;

        const {
            id,
            title,
            body,
            published,
            author,
            createdAt,
            comments
        } = this.props.post

        const createdAtFormatted = moment(createdAt).startOf('hour').fromNow()

        return <div>{(!this.state.isEdit) ? <SimpleCard>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>

                    <Typography paragraph>
                        {body}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Posted by: {author.name}
                    </Typography>

                    <Typography component="p">
                        Posted {createdAtFormatted}
                    </Typography>
                    
                    {
                        comments.length > 0 ?
                        (comments.length > 1 ? 
                        `${comments.length} Comments` : 
                        `${comments.length} Comment`) : ''
                    }

                    <CardActions>
                        
                    {(this.props.data.me.id === author.id) && 
                    <ContainedButton size="large" color="primary" onClick={this.onEditClicked}>
                        Edit 
                    </ContainedButton> }
                        
                    {(this.props.data.me.id === author.id) && 
                    <ContainedButton size="large" color="secondary" onClick={this.onDelete}>
                        Delete
                    </ContainedButton> }

                    <ContainedButton size="large" color="default" onClick={this.onSubscribe}>
                        {!this.state.isSubscribed ? "Turn On Notifications" : "Turn Off Notifications"} 
                    </ContainedButton> 

                    </CardActions>
        </SimpleCard> : <PostForm 
                    onCancel={this.onCancel} 
                    onEditSubmit={this.onEditSubmit} 
                    post={this.props.post}
                />}
                    <CommentList postId={id} comments={comments}/>
                    </div>


    }
}

export default compose(
        graphql(getMe),
        graphql(updatePostMutation, {
            name: "updatePost"
        }),
        graphql(deletePostMutation, {
            name: "deletePost"
        }),
        withStyles(styles))
    (PostListItem)