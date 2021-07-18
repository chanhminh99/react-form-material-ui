import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            firstNameErrorMsg: '',
            lastName: '',
            lastNameErrorMsg: '',
            username: '',
            usernameErrorMsg: '',
            email: '',
            emailErrorMsg: '',
            password: '',
            passwordErrorMsg: '',
    }

    }



 getDefaultValue = () => {
    return {
        firstName: '',
        firstNameErrorMsg: '',
        lastName: '',
        lastNameErrorMsg: '',
        username: '',
        usernameErrorMsg: '',
        email: '',
        emailErrorMsg: '',
        password: '',
        passwordErrorMsg: ''
    }
 }

 change = (e) => {
     this.props.onChange({[e.target.name]: e.target.value})
     this.setState({
         [e.target.name]: e.target.value
     })
 }

 validateSubmitForm = () => {
    let isError = false
    const errors = {
        lastNameErrorMsg: '',
        firstNameErrorMsg: '',
        usernameErrorMsg: '',
        emailErrorMsg: '',
        passwordErrorMsg: ''
    }
    const {username, firstName, lastName, email, password} = this.state

    if (username.length < 5) {
        isError = true
        errors.usernameErrorMsg = 'Username needs to be at least 5 characters long'
    }
    if (!firstName.length) {
        isError = true
        errors.firstNameErrorMsg = 'First Name can not be blank'
    }
    if (!lastName.length) {
        isError = true
        errors.lastNameErrorMsg = 'Last Name can not be blank'
    }
    if (email.indexOf('@') === -1) {
        isError = true
        errors.emailErrorMsg = 'Requires valid email'
    }
    if (!password.length) {
        isError = true
        errors.passwordErrorMsg = 'The password can not be blank'
    }

    if (isError) {
        this.setState(errors)
    }

    return isError
 }

 onSubmit = (e) => {
     e.preventDefault()

     const error = this.validateSubmitForm()
     if (!error) {
        const defaultValue = this.getDefaultValue()
        this.setState(defaultValue)
        this.props.onChange(defaultValue)
     }
 }

 render() {
    return (
        <form>
            <TextField
                error={!!this.state.firstNameErrorMsg}
                helperText={this.state.firstNameErrorMsg}
                id="standard-basic"
                label="First Name"
                name='firstName'
                value={this.state.firstName}
                onChange={this.change}/>
            <br/>
            <TextField
                error={!!this.state.lastNameErrorMsg}
                helperText={this.state.lastNameErrorMsg}
                id="standard-basic"
                label="Last Name"
                name='lastName'
                value={this.state.lastName}
                onChange={this.change}/>
            <br/>
            <TextField
                error={!!this.state.usernameErrorMsg}
                helperText={this.state.usernameErrorMsg}
                id="standard-basic"
                label="Username"
                name='username'
                value={this.state.username}
                onChange={this.change}/>
            <br/>
            <TextField
                error={!!this.state.emailErrorMsg}
                helperText={this.state.emailErrorMsg}
                name='email'
                id="standard-basic"
                label="Email"
                value={this.state.email}
                onChange={this.change}/>
            <br/>
            <TextField
                error={!!this.state.passwordErrorMsg}
                helperText={this.state.passwordErrorMsg}
                name='password'
                id="standard-password-input"
                type="password"
                label="Password"
                value={this.state.password}
                onChange={this.change}/>
            <br/>
            <div className="btn-submit-form">
            <Button
                variant="contained"
                color="primary"
                onClick={this.onSubmit}>Primary</Button>
            </div>
        </form>
    )
 }

}

export default Form
