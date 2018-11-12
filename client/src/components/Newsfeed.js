import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import PostList from './Post/PostList';
import CreatePost from './Post/CreatePost';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class Newsfeed extends Component {
    render() {
        const { classes } = this.props

        return <div>
        <CreatePost/>
        <PostList/>

        <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
            <AddIcon />
        </Button>
        </div>
    }
}

Newsfeed.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Newsfeed);