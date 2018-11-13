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
    compose
} from 'react-apollo';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CommentList from '../Comment/CommentList';
import Button from '@material-ui/core/Button';
import {
    ContainedButton
} from '../common/Button';
import {
    updatePostMutation,
    deletePostMutation
} from '../../apollo/queries/Mutation'
import { getPosts } from '../../apollo/queries/Query';

const styles = {
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};



class PostListItem extends Component {

    onEdit = (id, data) => {
        
    }

    onDelete = () => {
        this.props.mutate({
            variables: {
                id: this.props.post.id
            }, 
            refetchQueries: [{ query: getPosts}]
        })
    }

    render() {

        const {
            classes
        } = this.props;


        const {
            title,
            body,
            published,
            author,
            createdAt
        } = this.props.post

        return <SimpleCard>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {body}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Posted by: {author.name}
      </Typography>
      <Typography component="p">
        Posted at: {createdAt}
      </Typography>
      <CommentList/>

      <CardActions>
       
      <ContainedButton size="large" color="primary" onClick={this.onEdit}>
      Edit
    </ContainedButton>
    <ContainedButton size="large" color="secondary" onClick={this.onDelete}>
      Delete
    </ContainedButton>
      </CardActions>

        </SimpleCard>
    }
}

export default compose(
        graphql(deletePostMutation),
        withStyles(styles))
    (PostListItem)