import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CreatePostForm from './CreatePostForm';
// import createPostMutation from ''

class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            published: false,
        }
    }

    onSubmit = (post) => {

    }

    render() {
        return <CreatePostForm onSubmit={this.onSubmit}/>
    }
}

export default CreatePost