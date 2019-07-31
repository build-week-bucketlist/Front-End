import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './SignInAction'

const initialState = {
  
    isLoading: false,
    fetchingList:false,
    error:null
}

export const signinReducer = (state = initialState, action) => {
    switch ( action.type){
        case LOGIN_START: {
            return {
                ...state, 
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state, 
                isLoading: false,
                error: null,
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state, 
                isLoading: false, 
                error: action.payload.message,
            }
        }
        default:
            return state;
    }
}
