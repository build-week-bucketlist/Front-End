import React from 'react';

const Bucket = props => {
    return (
        <li>
            description: {props.item.description}
            completed: {props.item.completed}
            created: {props.item.created}
        </li>
    )
}

export default Bucket;