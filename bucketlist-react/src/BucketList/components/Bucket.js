import React from 'react';
// import { Icon } from 'semantic-ui-react'

const Bucket = props => {
    return (
        <div className="form-group row">
        <div className="col-md-4">

        </div>
        
        <div className="col-md-4">
           
        <ul class="list-group">
          
            <li class="list-group-item list-group-item-action">{props.item.description}</li>
        </ul>
        </div>
        <div className="col-md-4">

        </div>
    </div>

    )
}

export default Bucket;

