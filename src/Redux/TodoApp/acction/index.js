import axios from "axios"

export const MAKE_REQUEST = 'MAKE_REQUEST'
export const THROW_ERRORS = 'THROW_ERRORS'
export const GET_DATA = 'GET_DATA'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_USER = 'UPDATE_USER'

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST,
    }
}

export const throwError = (err) => {
    return {
        type: THROW_ERRORS,
        payload: err
    }
}

export const getAllDataApi = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}
export const addTodo = (todos) => {
    return {
        type: ADD_TODO,
        payload: todos
    }
}
export const removeTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}
export const editUser = () => {
    return {
        type: UPDATE_USER
    }
}




const API_BASE_URL = 'http://localhost:5001/user';
export const fatchUserData = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
        axios.get(API_BASE_URL).then((res) => {
            const list = res.data;
            dispatch(getAllDataApi(list))
        }).catch((err) => {
            dispatch(throwError(err.massage))
        })
        // }, 2000)
    }
}

export const addTodos = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
        axios.post(API_BASE_URL, data).then((res) => {
            dispatch(addTodo)
        }).catch((err) => {
            dispatch(throwError(err.massage))
        })
        // }, 2000)
    }
}


export const deleteOneData = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:5001/user/' + code).then((res) => {
            dispatch(removeTodo)
        }).catch((err) => {
            dispatch(throwError(err.massage))
        })
    }
}
export const updateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.put('http://localhost:5001/user/' + code, data).then(res => {
            dispatch(editUser());
        }).catch(err => {
            dispatch(throwError(err.message))
        })
        // }, 2000);

    }
}