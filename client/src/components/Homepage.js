import React from 'react';
import {
    Query
} from 'react-apollo';
import {
    gql
} from 'apollo-boost'
import Client from '../apollo/config'
import Header from './Header';
import CreateUser from './Register/CreateUser'
import UserList from './User/UserList'
import LoginUser from './Login/LoginUser';
import { AUTH_TOKEN } from '../apollo/constants'
import Newsfeed from './Newsfeed';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

const Homepage = (props) => {
    const { classes, isAuthenticated } = props

    if (isAuthenticated) {
        return    <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
          <Paper className={classes.paper}><UserList/></Paper>
          
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}><Newsfeed/></Paper>
            
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </div>
        

    }
    else {
        return  <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
          <Paper className={classes.paper}><UserList/></Paper>
          
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}> <CreateUser/>     </Paper>
            
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}><LoginUser/></Paper>
          </Grid>
        </Grid>
      </div>

    
    }
}

Homepage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Homepage);

