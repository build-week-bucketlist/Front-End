import React from 'react';
import {connect} from 'react-redux'
import {addTodo, fetchingCurrentUser} from '../BucketListActions'

class BucketListForm extends React.Component{
    state = {
        
        description: '',
        completed: false,
      
      
    }
    componentDidMount(){
        this.props.fetchingCurrentUser();
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}) 
      
    }

    addToList = e => {
       e.preventDefault(); 
       
       const {description, completed} = this.state;
       const newBucketlist = {
           description, completed, user_id : this.props.user.id
       }
       this.props.addTodo(newBucketlist)
        
      
   }
    
    render(){
        
        return (
            <div className="form-group row">
               <div className="col-sm-10">
                <h1>BucketList</h1>
                <div>
                    {}
                </div>
                <form onSubmit = {this.addToList}>
                    <input className = 'form-control'
                        type = 'text'
                        name = 'description'
                        placeholder = 'description'
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
    console.log('BucketListForm mapStateToProps ',state)
    return {
        completed:state.bucketlistReducer.completed,
        description:state.bucketlistReducer.description,
        user_id:state.bucketlistReducer.user_id,
        addingItem:state.bucketlistReducer.addingItem,
        error:state.bucketlistReducer.error,
        user: state.bucketlistReducer.user
    }
}

export default connect(mapStateToProps, {addTodo,fetchingCurrentUser })(BucketListForm);