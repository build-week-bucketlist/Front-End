import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BucketListForm from '../components/BucketListForm'
import {gettingItems} from '../BucketListActions'
import BucketList from '../components/BuckletList'
 
class ProtectedPage extends React.Component{

    componentDidMount(){
        this.props.gettingItems();
    }

    render(){
        console.log('Props here', this.props)
        return(
            <div>
                {this.props.fetchingItems ? (
                    <p>...Loading</p>
                ) : ( <BucketList items = {this.props.items} />)}
                <BucketListForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        fetchingItems: state.fetchingItems
    }
}

export default withRouter(connect(mapStateToProps, {gettingItems})(ProtectedPage));