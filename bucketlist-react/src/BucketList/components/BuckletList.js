import React from 'react';
import Bucket from './Bucket'

class BucketList extends React.Component{
    
    render(){
        return(
            <div>
                {this.props.items.map(item => {
                    return <Bucket key={item.user_id} item = {item} />
                })}
            </div>
        )
    }
}

export default BucketList;