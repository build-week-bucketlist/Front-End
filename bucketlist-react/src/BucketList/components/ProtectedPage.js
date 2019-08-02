import React from 'react';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';

import {gettingItems,fetchingCurrentUser} from '../BucketListActions'
import BucketList from '../components/BuckletList'
 
class ProtectedPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('The componentDiDmount',localStorage.getItem('id'))
        this.props.gettingItems(localStorage.getItem('id'));
    }

    render(){
        console.log('ProtectedPage render props', this.props)
        return(
            <div>
                {this.props.fetchingItems ? (
                    <p>...Loading</p>
                ) : ( 
                <BucketList items = {this.props.items} />
                )}
             
            </div>  
        )
    }
}

const mapStateToProps = state => {
    console.log('ProtectPage mapStateToProps', state.bucketlistReducer.user.id )
    return {
        items: state.bucketlistReducer.items,
        fetchingItems: state.fetchingItems,
        user: state.bucketlistReducer.user
    }
}

export default connect(mapStateToProps, {gettingItems,fetchingCurrentUser})(ProtectedPage);