import axios from 'axios';


export const SIGNINGUP_START = 'SIGNINGUP_START';
export const SIGNINGUP_SUCCESS = 'SIGNINGUP_SUCCESS';
export const SIGNINGUP_FAILED = 'SIGNINGUP_FAILED';

export function signingUp (name, email, password){
    return dispatch => {
        dispatch({type : SIGNINGUP_START})

        return axios
         .post ('https://bucket-list-webpt6.herokuapp.com/api/register', {name, email,
         password})
         .then(res => {
             localStorage.setItem('token', res.data.token)
             dispatch({type: SIGNINGUP_SUCCESS, payload: res.data})
             console.log(res.data)
         })
         .catch(err => {
             console.log(err)
         })   
    }
}