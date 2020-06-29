import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../Actions/AlertActions'
import { clearError, login } from '../Actions/AuthActions'
import { v4 as uuid } from "uuid";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    loginNow = () => {
        if (this.state.email === '' || this.state.password === '') {
            let id = uuid()
            this.props.setAlert('Please enter Your credentials before ! ', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)

            }, 5000)
        } else {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')

        }


        if (nextProps.auth.error) {
            if (nextProps.auth.error === 'Please register before!' || nextProps.auth.error === 'Wrong Password!') {
                let id = uuid()
                this.props.setAlert(nextProps.auth.error, 'warning', id)
                setTimeout(() => {
                    this.props.removeAlert()
                    this.props.clearError()
                }, 5000)
            }

        }
    }
    render() {
        return (
            <div className='register-div'>
                <div >
                    <h1 className='signup'>Sign in</h1>

                    <div >
                        <form>
                            <input onChange={this.handleChange} name='email' type='text' placeholder='E-mail' />
                            <input onChange={this.handleChange} name='password' type='password' placeholder='Password' />
                        </form>
                    </div>
                    <div className='wrapper'>
                    <div class="button"  onClick={this.loginNow}>
                        <span class="button__mask"></span>
                        <span class="button__text">Login</span>
                        <span class="button__text button__text--bis">Login</span>
                    </div>
                        <h6 className='sign-text'>You don't have an account? <Link to='/register'>Register here</Link></h6>
                </div>
            </div>
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login, setAlert, removeAlert, clearError })(Login)