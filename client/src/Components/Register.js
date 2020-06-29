import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register, clearError} from '../Actions/AuthActions'
import { setAlert, removeAlert } from '../Actions/AlertActions'
import { v4 as uuid } from "uuid";
import {Button} from 'react-bootstrap'


 class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            adress: '',
            phone: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    registerNow = () => {
        if(this.state.firstname === '' || this.state.lastname === '' || this.state.email === '' || this.state.password === '' || this.state.adress === '' || this.state.phone === ''){
            let id = uuid()
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        }else{
            this.props.register({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                adress: this.state.adress,
                phone: this.state.phone,

            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')

        }
        if (nextProps.auth.error === 'User already exists!!') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }

    }
    render() {
        return (
            <div>
             <div className='register-div'>
                 <h1 className='signup'>Sign up</h1>
                    <form>
                        <input name='firstname' type='text' onChange={this.handleChange} placeholder='Firstname' />
                        <input name='lastname' type='text' onChange={this.handleChange} placeholder='Lastname' />
                        <input name='email' type='text' onChange={this.handleChange} placeholder='Email' />
                        <input name='password' type='password' onChange={this.handleChange} placeholder='Password' />
                        <input name='adress' type='text' onChange={this.handleChange} placeholder='Adress' />
                        <input name='phone' type='text' onChange={this.handleChange} placeholder='Phone Number' />
                    </form>
                </div>
                <div className='wrapper'>
                        <div onClick={this.registerNow} class="button">
                            <span class="button__mask"></span>
                            <span class="button__text">Register</span>
                            <span class="button__text button__text--bis">Register</span>
                        </div>
                    </div>
                    <h6 className='sign-text'>Do you have an account? <Link to='/login'>Login here</Link> </h6>
            </div>
    
                
         
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, {setAlert, removeAlert, register, clearError})(Register)