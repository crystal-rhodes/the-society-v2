import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withStyles
} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {
    OutlinedButton
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
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text ? this.props.text : ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()

        

        const text = this.state.text

        this.setState({text: ''})

        console.log(text)

        !this.props.text ? this.props.onSubmit({
            text
        }) : this.props.onEditSubmit(text)
    }

    onTextChanged = (e) => {
        const text = e.target.value
        this.setState({text})
    }

    onCancel = () => {
        this.props.onCancel({})
    }

    render() {

        const {
            classes
        } = this.props;

        return (
            <form onSubmit={this.onSubmit} className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="comment-text"
                    className={classes.textField}
                    placeholder="Write a comment..."
                    fullWidth={true}
                    margin="normal"
                    value={this.state.text}
                    onChange={this.onTextChanged}
                />

                {this.props.text ? <div>
                    <OutlinedButton size="medium" color="primary" onClick={this.onSubmit}>
                        Save
                    </OutlinedButton>

                    <OutlinedButton size="medium" color="secondary" onClick={this.onCancel}>
                        Cancel
                    </OutlinedButton>   
                </div> : <div></div>}
        
            </form>
        );
    }
}

CommentForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentForm);