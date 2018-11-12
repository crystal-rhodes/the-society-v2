import React from 'react'
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css"
import TextField from '@material-ui/core/TextField'
import {
    withStyles
} from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ContainedButton } from '../common/Button'
import {
    FormControl
} from '@material-ui/core';

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


class RegisterForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            birthDate: 0,
            gender: '',
        }
    }

    onFirstNameChanged = (e) => {
        const firstName = e.target.value
        this.setState({
            firstName
        })
    }

    onLastNameChanged = (e) => {
        const lastName = e.target.value
        this.setState({
            lastName
        })
    }

    onLastNameChanged = (e) => {
        const lastName = e.target.value
        this.setState({
            lastName
        })
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

    onGenderChanged = (e) => {
        const gender = e.target.value
        console.log(gender)
        if (gender === 'male') {
            this.setState({
                gender: gender
            })
        } else {
            this.setState({
                gender: gender
            })
        }
    }

    onBirthDateChanged = (birthDate) => {
        const dateString = birthDate.target.value

        console.log(dateString)

        const unix = parseInt(moment(dateString).format('X'));

        this.setState({
            birthDate: unix
        }, () =>    

        console.log(this.state.birthDate))
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            firstName,
            lastName,
            password,
            birthDate,
            gender
        } = this.state

        this.props.onSubmit({
            email,
            firstName,
            lastName,
            password,
            birthDate,
            gender
        })

    }

    render() {
        const {
            classes
        } = this.props;
        return (<FormControl className={classes.container} component="fieldset" onSubmit={this.onSubmit}>
            <h3>Registration Form</h3>
                <TextField
                type="text"
                onChange={this.onFirstNameChanged}
                className={classes.textField}
                margin="normal"
                value={this.state.firstName}
                placeholder="First name"
                label="Name"
                autoFocus
                />
                
            <TextField
                type="text"
                onChange={this.onLastNameChanged}
                value={this.state.lastName}
                placeholder="Last name"
                className={classes.textField}/>

            
          <TextField
            type="email"
            onChange={this.onEmailChanged}
            className={classes.textField}
            value={this.state.email}
            placeholder="Email"/>

            <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="1970-01-01"
            className={classes.textField}
            onChange={this.onBirthDateChanged}
            />
            
          <TextField
            type="password"
            onChange={this.onPasswordChanged}
            value={this.state.password}
            className={classes.textField}
            placeholder="Password"
            />
            
            <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.gender}
            onChange={this.onGenderChanged}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
            
        
        <ContainedButton color="primary" className={classes.button} onClick={this.onSubmit}>
          Sign Up
        </ContainedButton>

      
          </FormControl>)

    }
}

export default withStyles(styles)(RegisterForm);