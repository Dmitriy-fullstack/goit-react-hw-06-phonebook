import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserError
} from './authActions.js';

const initialState = {name: null, email: null}

const user = createReducer(initialState, {
    [registerSuccess]: (_,{payload}) => payload.user,
    [loginSuccess]: (_,{payload}) => payload.user,
    [logoutSuccess]: () => initialState,
    [getCurrentUserSuccess]: (_,{payload}) => payload
});

const token = createReducer(null, {
    [registerSuccess]: (_,{payload}) => payload.token,
    [loginSuccess]: (_,{payload}) => payload.token,
    [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [registerError]: setError,
    [loginError]: setError,
    [logoutError]: setError,
    [getCurrentUserError]: setError
});

export default combineReducers({
    user,
    token,
    error
})