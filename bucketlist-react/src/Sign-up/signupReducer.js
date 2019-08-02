import {
    SIGNINGUP_START,
    SIGNINGUP_SUCCESS,
    SIGNINGUP_FAILED
} from './SignUpAction'

const initialState = {

    signingUp: false,
    signingIn: false,
    fetchingList:false,
    error:null
}

export const signupReducer = (state = initialState, action) => {
    switch ( action.type){
        case SIGNINGUP_START:
            return{
                ...state,
                signingUp: true,
                error: null
            }
        case SIGNINGUP_SUCCESS:
            return{
                ...state,
                signingUp: true,
                error: null
            }
        case SIGNINGUP_FAILED:
            return{
                ...state,
                signingUp: false,
                error: action.payload
            }
        default:
            return state;
    }
}