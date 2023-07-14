// import { createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

export const store = configureStore({ reducer: rootReducer, middleware: [thunk, logger] })