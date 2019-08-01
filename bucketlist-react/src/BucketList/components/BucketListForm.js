import React from 'react';
import {connect} from 'react-redux'
import {addTodo, fetchingCurrentUser} from '../BucketListActions'
import {Row, Col} from 'react-bootstrap'

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
        <div>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <h1>BucketList</h1>
                <form   onSubmit = {this.addToList}>
                    <div className = 'form-group'>
                    <input className = 'form-control'
                        type = 'text'
                        name = 'description'
                        placeholder = 'description'
                        value = {this.state.description}
                        onChange = {this.handleChange} />
                    </div>
                       <button className = 'btn btn-primary btn-md ml-md-auto active'
                    type = 'submit' >Add BucketList</button>
                </form>
               
              </Col>
        </Row>
        </div>
        )
    }

}

const mapStateToProps = state => {
    console.log('BucketListFormmapStateToProps ',state)
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