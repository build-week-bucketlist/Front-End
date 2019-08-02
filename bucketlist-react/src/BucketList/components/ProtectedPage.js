import React from 'react';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
import BucketListForm from '../components/BucketListForm'
import {gettingItems,fetchingCurrentUser} from '../BucketListActions'
import BucketList from './BucketList'
 
class ProtectedPage extends React.Component{

    componentDidMount(){
        console.log('The componentDiDmount',this.props.user.id)
        this.props.gettingItems(1);
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
                <BucketListForm />
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