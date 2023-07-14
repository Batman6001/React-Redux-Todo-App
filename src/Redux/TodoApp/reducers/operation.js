import { ADD_TODO, DELETE_TODO, GET_DATA, MAKE_REQUEST, THROW_ERRORS, UPDATE_USER } from "../acction";

// import { ADD_TODO, DELETE_TODO } from "../acction";
const initialState = {
    loading: true,
    userlist: [],
    errmessage: ''
}

export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     return [...state, action.payload];
        // case DELETE_TODO:
        //     const deleteData = state.filter((todo) => todo.id !== action.payload);
        //     return deleteData;

        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case THROW_ERRORS:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_DATA:
            return {
                loading: false,
                errmessage: '',
                userlist: action.payload,
                // userobj: {}
            }

        case ADD_TODO: return {
            ...state,
            loading: false
        }
        case DELETE_TODO:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER: return {
            ...state,
            loading: false
        }

        default: return state;
    }
}