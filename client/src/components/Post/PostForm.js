import React, {
    Component
} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withStyles
} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
    FormControl
} from '@material-ui/core';
import {
    ContainedButton
} from '../common/Button';

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

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body : '',
            published: props.post ? props.post.published : false,
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

        const {
            title,
            body,
            published
        } = this.state

        !this.props.post ? this.props.onSubmit({
            title,
            body,
            published
        }) : this.props.onEditSubmit({
            title,
            body,
            published
        })
    }

    onCancel = () => {
        this.props.onCancel({
            isEdit: false
        })
    }

    onClear = () => {
        this.setState({
            title: this.props.post ? this.props.post.title : '',
            body: this.props.post ? this.props.post.body : '',
            published: this.props.post ? this.props.post.published : false
        })
    }

    render() {
        const {
            classes
        } = this.props

        return <FormControl fullWidth={true} onSubmit={this.onSubmit}>
        <h1>{this.props.post ? "Edit " : "Make "}Post</h1>
        <TextField
            label="Status title"
            placeholder="What are you thinking about (Optional)"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.onTitleChanged}
            value={this.state.title}
            fullWidth={true}
        />
        <TextField
            label="Status"
            placeholder="What's on your mind"
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.onBodyChanged}
            value={this.state.body}
            fullWidth={true}
        />
        <FormControlLabel
            control={
            <Switch
                checked={this.state.published}
                onChange={this.onPublishedChanged}
                value={this.state.published}
            />
            }
            label="Published"
        />
        { !this.props.post ?  <ContainedButton color="primary" className={classes.button} onClick={this.onSubmit}>
            Share
        </ContainedButton> : <div>
        <ContainedButton color="primary" className={classes.button} onClick={this.onSubmit}>
            Save
        </ContainedButton>     
        <ContainedButton color="secondary" className={classes.button} onClick={this.onCancel}>
            Cancel
        </ContainedButton>  
        </div>
        }
        <ContainedButton color="default" className={classes.button} onClick={this.onClear}>
            { this.props.post ? "Reset" : "Clear"} 
        </ContainedButton>     
        </FormControl>
    }
}

export default withStyles(styles)(PostForm)