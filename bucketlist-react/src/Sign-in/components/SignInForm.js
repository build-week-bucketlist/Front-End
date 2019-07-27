import React from 'react';
import { login } from '../SignInAction';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name ]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
      
        const {email, password} = this.state
        this.props.login(email,
            password)
        .then(() => {
            this.props.history.push("/")
        })
        .catch((err) => {
            console.error(err)
        })
    }

    render() {
        const { email, password } = this.state
        const { isLoading, error } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="email" placeholder="email" value={email} onChange={this.handleChange} /><br />
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br />

                {isLoading 
                    ? <p>Logging in...</p>
                    : <button type="submit">Login</button>}
            </form>
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
)(Login);