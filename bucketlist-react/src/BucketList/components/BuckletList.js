import React from 'react';
import Bucket from './Bucket'
import BucketListForm from '../components/BucketListForm'

class BucketList extends React.Component{
    
    render(){
        // console.log('THIS is PROPs from BUCKETLIST', this.props)
        return(
            <div>
                <h1>Knock of your BucketList one at a time</h1>
                {
                    this.props.items.map(item => {
                    return <Bucket key = {item.id}  item = {item} />
                }) }
                   <BucketListForm />
            </div>
        )
    }
}

export default BucketList;