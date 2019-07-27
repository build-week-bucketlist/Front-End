import React from 'react';
import { login } from '../SignInAction';
import { connect } from 'react-redux';

class SignInForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name ]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
      

        this.props.login(this.state.credentials)
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
            <form onSubmit={this.handleSubmit}>
                {error && <p className="error">{error}</p>}

                <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} /><br />
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
)(SignInForm);