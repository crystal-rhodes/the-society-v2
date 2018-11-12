import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

class CreatePostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            published: false,
        }
    }

    onPublishedChanged = (e) => {
        this.setState({
            ...this.state,
            published: e.target.checked
        })
    }

    onTitleChanged = (e) => {
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }

    onBodyChanged = (e) => {
        this.setState({
            ...this.state,
            body: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();


    }

    render() {
        const { classes } = this.props

        return <FormControl onSubmit={this.onSubmit}>
        <TextField
            label="Status title"
            placeholder="What are you thinking about (Optional)"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.onTitleChanged}
        />
        <TextField
            label="Status"
            placeholder="What's on your mind"
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.onBodyChanged}
        />
        <FormControlLabel
            control={
            <Switch
                checked={this.state.published}
                onChange={this.onPublishedChanged}
                value="published"
            />
            }
            label="Published"
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
            Share
        </Button>
        </FormControl>
    }
}

export default withStyles(styles)(CreatePostForm)