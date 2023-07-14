import { combineReducers } from "redux";
import { operationReducer } from "./TodoApp/reducers/operation";

export const rootReducer = combineReducers({ user: operationReducer })