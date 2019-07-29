import axios from 'axios';
import axiosWithAuth from '../Sign-in/components/axiosWithAuth'

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILED = 'FETCHING_FAILED'

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function fetchingData(id){
    return dispatch => {
        dispatch({type:FETCHING_START})

       axiosWithAuth()
        .get(`https://bucket-list-webpt6.herokuapp.com/api/item/${id}`)
        .then(res=> {
            dispatch({type: FETCHING_SUCCESS, payload: res.data})
            console.log(res.data)
        })
        .catch(err => {
            dispatch({type: FETCHING_FAILED, payload: err})
            console.log(err)
        }) 
    }
}

export function addTodo(item){
    console.log("DDADADAS",item)
    return dispatch => {
        dispatch({type:ADD_TODO})

        axiosWithAuth()
        .post('https://bucket-list-webpt6.herokuapp.com/api/item/',
            item
        )
        .then(res=> {
            dispatch({type: ADD_TODO, payload: res.data})
            // console.log(res.data)
        })
        .catch(err => {
            dispatch({type: ADD_TODO, payload: err})
        }) 
    }
}

export function editTodo(id){
    return dispatch => {
        dispatch({type:EDIT_TODO})

        return axios
        .put(`https://bucket-list-webpt6.herokuapp.com/api/item/${id}`)
        .then(res=> {
            dispatch({type: EDIT_TODO, payload: res.data})
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }
}

export function deleteTodo(id){
    return dispatch => {
        dispatch({type:REMOVE_TODO})

        return axios
        .delete(`https://bucket-list-webpt6.herokuapp.com/api/item/${id}`)
        .then(res=> {
            dispatch({type: REMOVE_TODO, payload: res.data})
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }
}

