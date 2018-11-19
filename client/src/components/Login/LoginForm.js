import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import {
    withStyles
} from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import {
    FormControl
} from '@material-ui/core';
import { Link } from 'react-router-dom'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    group: {
        flexDirection: 'row',
    },
    button: {
        margin: theme.spacing.unit,
        width: 200,
    },
});

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    onEmailChanged = (e) => {
        const email = e.target.value
        this.setState({
            email
        })
    }

    onPasswordChanged = (e) => {
        const password = e.target.value
        this.setState({
            password
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state

        this.props.onSubmit({
            email,
            password
        })
    }

    render() {
        const { classes } = this.props;

        return <form className={classes.container}>
            {this.props.loginFailed ? <h5>Login failed!</h5> : '' }
            {this.props.loginAttempt > 5 ? <h5>Login failed more than 5 times!</h5> : '' }

            <h3>Login</h3>
            <TextField
                type="email"
                value={this.state.email}
                placeholder="email"
                className={classes.textField}
                onChange={this.onEmailChanged}
            />
            <TextField
                type="password"
                value="current-password"
                placeholder="password"
                className={classes.textField}
                onChange={this.onPasswordChanged}
            />
            <Button 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                onClick={this.onSubmit}>
                Log In
            </Button>
            <Link to="/forgotpassword">Forgot password?</Link>
        
        </form>
    }
}

export default withStyles(styles)(LoginForm)