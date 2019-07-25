import {} from './SignUpAction'

const initialState = {
    todo:[],
    fetchingList:false,
    error:null
}

export const signupReducer = (state = initialState, action) => {
    switch ( action.type){
        default:
            return state;
    }
}

// export default signupReducer;