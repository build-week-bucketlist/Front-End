import {
   
} from './BucketListActions'

const initialState = {
    todo:[],
    fetchingList:false,
    error:null
}

 export const bucketlistReducer = (state = initialState, action) => {
    switch ( action.type){
        default:
            return state;
    }
}
