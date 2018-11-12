import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'

class Login extends Component {
    state = {
      login: true, // switch between Login and SignUp
      email: '',
      password: '',
      name: '',
    }
  
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
          <div className="flex pa1 justify-between nowrap orange">
            <div className="flex flex-fixed black">
              <div className="fw7 mr1">Hacker News</div>
              <Link to="/" className="ml1 no-underline black">
                new
              </Link>
              {authToken && (
                <div className="flex">
                  <div className="ml1">|</div>
                  <Link to="/create" className="ml1 no-underline black">
                    submit
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-fixed">
              {authToken ? (
                <div
                  className="ml1 pointer black"
                  onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN)
                    this.props.history.push(`/`)
                  }}
                >
                  logout
                </div>
              ) : (
                <Link to="/login" className="ml1 no-underline black">
                  login
                </Link>
              )}
            </div>
          </div>
        )
      }
  
    _confirm = async () => {
      // ... you'll implement this 🔜
    }
  
    _saveUserData = token => {
      localStorage.setItem(AUTH_TOKEN, token)
    }
  }
  
  export default Login