// import axios from 'axios';
import axiosWithAuth from '../Sign-in/components/axiosWithAuth'

export const FETCHING_ITEMS_START = 'FETCHING_ITEMS_START'
export const FETCHING_ITEMS_SUCCESS = 'FETCHING_ITEMS_SUCCESS'
export const FETCHING_ITEMS_FAILED = 'FETCHING_ITEMS_FAILED'

export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';


// export const EDIT_TODO = 'EDIT_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const REMOVE_TODO = 'REMOVE_TODO';

// export const SHOW_ALL = 'SHOW_ALL';
// export const SHOW_COMPLETED = 'SHOW_COMPLETED';
// export const SHOW_ACTIVE = 'SHOW_ACTIVE';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function fetchingCurrentUser(){
    console.log('The fetchingCurrentUser function')
    return dispatch => {
        dispatch({type:GET_USER_START})

       return axiosWithAuth()
        .get('https://bucket-list-webpt6.herokuapp.com/api/user')
        .then(res=> {
            dispatch({type: GET_USER_SUCCESS, payload: res.data})
            console.log('fetchingCurrentUser',res.data)
        })
        .catch(err => {
            dispatch({type: GET_USER_FAILURE, payload: err})
            console.log(err)
        }) 
    }
}

export function gettingItems(id){
    console.log('The gettingItems function (id) param', id)
    return dispatch => {
        dispatch({type:FETCHING_ITEMS_START})

       return axiosWithAuth()
        .get(`https://bucket-list-webpt6.herokuapp.com/api/user/${id}/items`)
        .then(res=> {
            dispatch({type: FETCHING_ITEMS_SUCCESS, payload: res.data})
            console.log('gettingItems',res.data)
        })
        .catch(err => {
            dispatch({type: FETCHING_ITEMS_FAILED, payload: err})
            console.log(err)
        }) 
    }
}

export function addTodo(item){
    console.log("The addTodo function (item) param",item)
    return dispatch => {
        dispatch({type:ADD_TODO_START})
        
       return axiosWithAuth()
        .post('https://bucket-list-webpt6.herokuapp.com/api/item/',
            item
        )
        .then(res=> {
            dispatch({type: ADD_TODO_SUCCESS, payload: res.data})
            console.log('addTodo',res.data)
        })
        .catch(err => {
            dispatch({type: ADD_TODO_FAILURE, payload: err})
        }) 
    }
}

// export function editTodo(id){
//     return dispatch => {
//         dispatch({type:EDIT_TODO})

//         return axios
//         .put(`https://bucket-list-webpt6.herokuapp.com/api/item/${id}`)
//         .then(res=> {
//             dispatch({type: EDIT_TODO, payload: res.data})
//             console.log(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         }) 
//     }
// }

// export function deleteTodo(id){
//     return dispatch => {
//         dispatch({type:REMOVE_TODO})

//         return axios
//         .delete(`https://bucket-list-webpt6.herokuapp.com/api/item/${id}`)
//         .then(res=> {
//             dispatch({type: REMOVE_TODO, payload: res.data})
//             console.log(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         }) 
//     }
// }

