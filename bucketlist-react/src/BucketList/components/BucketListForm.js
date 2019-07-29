import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../BucketListActions'

class BucketList extends React.Component{
    state = {
        description: '',
        completed: false,
        user_id : Number
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addToList = e => {
        
        const {description} = this.state;
    this.props.addTodo(description)
    this.setState({description: ''})
    this.props.history.push("/bucketList")
    }
    render(){
        
        return (
            <div className="form-group row">
               <div className="col-sm-10">
                <h1>BucketList</h1>
                <form onSubmit = {this.addToList}>
                    <input className = 'form-control'
                        type = 'text'
                        name = 'description'
                        value = {this.state.description}
                        onChange = {this.handleChange} />
                   
                    <button className = 'btn btn-primary btn-md'
                    type = 'submit'>Add BucketList</button>
                </form>
               </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps, {addTodo})(BucketList);