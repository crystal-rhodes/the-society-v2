import React from 'react'
import moment from 'moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
    gql
} from 'apollo-boost'
import Client from '../apollo/config'
import Button from './common/Button'
import TextField from './common/TextField'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            birthDate: moment(),
            isMale: null,
            error: ''
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
        if (e.target.value === 'male') {
            this.setState({
                isMale: true
            })
        } else {
            this.setState({
                isMale: false
            })
        }
    }

    onBirthDateChanged = (birthDate) => {
        this.setState({
            birthDate
        })
    }

    onSubmit = (e) => {
        e.preventDefault();


    }

    render() {
        return (<form className="register-form" onSubmit={this.onSubmit}>
            <h3>Registration Form</h3>
            <div className="form-field">
                <input
                type="text"
                onChange={this.onFirstNameChanged}
                value={this.state.firstName}
                placeholder="First name"
                required={true}
                autoFocus/>
            <input
                type="text"
                onChange={this.onLastNameChanged}
                value={this.state.lastName}
                placeholder="Last name"/>
            </div>

            <div className="form-field">
          <input
            type="email"
            onChange={this.onEmailChanged}
            value={this.state.email}
            placeholder="Email"/>
            </div>
            <div className="form-field">
          <input
            type="password"
            onChange={this.onPasswordChanged}
            value={this.state.password}
            placeholder="Password"/>
            </div>
            <div className="form-field">
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.onGenderChanged}
            required/>
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.onGenderChanged}/>
          Female  
          </div>
          <div className="form-field">
          <DatePicker
          selected={this.state.birthDate}
          onChange={this.onBirthDateChanged}
        />
        </div>
        <div className="form-field">
        <Button>Sign Up</Button>
        </div>
          </form>)

    }
}

export default RegisterForm;