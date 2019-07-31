import {
    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    FETCHING_ITEMS_START,
    FETCHING_ITEMS_SUCCESS,
    FETCHING_ITEMS_FAILED,
} from './BucketListActions'

const initialState = {
        completed: false,
        description: "",
        user_id:'',
        addingItem: false,
        error: null,
        isLoading: false,
        user: {},
        items:[],
        fetchingItems: false
}

 export const bucketlistReducer = (state = initialState, action) => {
    // console.log('did the action make it to the reducer????');
    switch ( action.type){
        case ADD_TODO_START:
            return {
                ...state,
                addingItem: true 
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                description: action.payload,
                user_id: action.payload   
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                error: 'we have an error' 
            }
        case GET_USER_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                error: 'we have an error'
            }
        case FETCHING_ITEMS_START:
            return {
                ...state,
                fetchingItems: true
            }
        case FETCHING_ITEMS_SUCCESS:
            return {
                ...state,
                fetchingItems: true,
                items: action.payload
            }
        case FETCHING_ITEMS_FAILED:
            return {
                ...state,
                error: 'we have an error'
            }
        
        default:
            return state;
    }
}
