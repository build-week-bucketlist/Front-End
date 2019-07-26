import axios from 'axios';


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })

        return axios.post('https://bucket-list-webpt6.herokuapp.com/api/login', { username, password })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS })
        })
        .catch((err) => {
            const payload = err.response ? err.response.data : err
            dispatch({ type: LOGIN_FAILED, payload })
        })
    }
}