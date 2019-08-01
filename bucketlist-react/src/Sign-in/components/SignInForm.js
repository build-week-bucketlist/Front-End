import React from 'react';
import { login } from '../SignInAction';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

class SignInForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name ]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state

        this.props.login(username, password)
        .then(() => {
            this.props.history.push("/bucketList")
        })
        .catch((err) => {
            console.error(err)
        })
    }

    render() {
        const { username, password } = this.state
        const { isLoading, error } = this.props

        return (
            <Form onSubmit={this.handleSubmit}>
                {error && <p className="error">{error}</p>}

                <h2>Login</h2>

                    <label className="username">Username</label>
                    <input className="formUser"
                        type="email" 
                        name="username" 
                        // placeholder="Username" 
                        value={username} 
                        onChange={this.handleChange} />
                    

                <label className="password">Password</label>
                <input className="formPass"
                    type="password" 
                    name="password" 
                    // placeholder="Password" 
                    value={password} 
                    onChange={this.handleChange} />

                {isLoading 
                    ? <p>Logging in...</p>
                    : <button className="loginButton" type="submit">Login</button> }
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return{
    isLoading: state.isLoading,
    error: state.error 
    }
}

const mapDispatchToProps = {
    login,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInForm);