import {
    ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO
} from './BucketListActions'

const initialState = {
   item: []
    
}

 export const bucketlistReducer = (state = initialState, action) => {
    switch ( action.type){
        case ADD_TODO:
            return {
                ...state,
                description: action.payload   
            }
        case EDIT_TODO:
            return {
                ...state,
                item: action.payload   
            }
        case REMOVE_TODO:
            return {
                ...state,
                item: action.payload   
            }
        default:
            return state;
    }
}
