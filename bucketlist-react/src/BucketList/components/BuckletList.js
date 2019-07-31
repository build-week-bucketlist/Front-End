import React from 'react';
import Bucket from './Bucket'

class BucketList extends React.Component{
    
    render(){
        console.log('THIS is PROPs from BUCKETLIST', this.props)
        return(
            <div>
                {
                    this.props.items.map(item => {
                    return <Bucket  item = {item} />
                }) }
            </div>
        )
    }
}

export default BucketList;