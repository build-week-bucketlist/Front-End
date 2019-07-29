import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signingUp} from '../SignUpAction'


class SignUpForm extends Component {
     state = {
        name: '',
        email: '',
        password: ''
     }

     handleChange = e => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }
     signUp = e => {
         e.preventDefault();
         const { name, password, email } = this.state
        this.props.signingUp( name, email, password )
        .then(()=>{
            this.props.history.push('/signIn')
        })
     }
    
    render(){
        
        return (
        <div className="col-md-6 col-md-offset-3">
            <form onSubmit = {this.signUp}>
                <h2>Sign Up</h2>

                <div className = 'form-group'>
                <label className = 'control-label'>name</label>
                <input className = 'form-control'
                    type = 'text'
                    placeholder = 'name'
                    name = 'name'
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    />
                </div>  
                <div className = 'form-group'>
                <label className = 'control-label'>Email</label>
                <input className = 'form-control'
                    type = 'text'
                    placeholder = 'email'
                    name = 'email'
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    />
                </div>  
                <div className = 'form-group'>
                <label className = 'control-label'>Password</label>
                <input className = 'form-control'
                    type = 'password'
                    placeholder = 'password'
                    name = 'password'
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    />
                </div>  
                <button className = 'btn btn-primary btn-lg'
                    type = 'submit' >
                        SignUp
                </button>
            </form>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        signingUp: state.signingUp,
        error: state.error
    }
}

export default connect(mapStateToProps, {signingUp})(SignUpForm) ;