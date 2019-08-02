import React from 'react';
import { login } from '../SignInAction';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap'

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
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
            
            <form onSubmit={this.handleSubmit}>
                {error && <p className="error">{error}</p>}
                <h1>Login</h1>
            <div className='form-group'>
                <input className="form-control"
                    type="name" 
                    name="username" 
                    placeholder="Username" 
                    value={username} 
                    onChange={this.handleChange} />
            </div>
            <div className='form-group'>
                <input className="form-control"
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={this.handleChange} />
            </div>
            {isLoading 
                ? <p>Logging in...</p>
                 : <button className="btn btn-primary btn-lg" type="submit">Login</button> }
            </form>
                </Col>
            </Row>
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