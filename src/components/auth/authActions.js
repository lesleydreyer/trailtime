import { API } from '../../config';
import { normalizeResponseErrors } from './utils';
//I think this is another way to do errors - import { SubmissionError } from 'redux-form';
//FAKE DATA for testing - import { FAKE_USER, FAKE_JWT, FAKE_LOGIN_DATA } from "./authFakeData";
//FAKE API for testing before backend is ready - const API = "https://jsonplaceholder.typicode.com";

export const SET_AUTH_DATA = "SET_AUTH_DATA";
export const setAuthData = authData => ({
    type: SET_AUTH_DATA,
    authData
});

export const CLEAR_AUTH_DATA = "CLEAR_AUTH_DATA";
export const clearAuthData = () => ({
    type: CLEAR_AUTH_DATA
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
    type: LOGOUT
});

export const SIGN_UP_REQUEST = "SIGN_UP";
export const signUpAction = () => ({
    type: SIGN_UP_REQUEST
});
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const signUpSuccessAction = user => ({
    type: SIGN_UP_SUCCESS,
    user
});
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const signUpFailureAction = error => ({
    type: SIGN_UP_FAILURE,
    error
});

export const signUp = user => dispatch => {
    dispatch(signUpAction());
    return (
        fetch(`${API}/user`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(signUpData => {
                dispatch(signUpSuccessAction(signUpData));
                return signUpData;
            })
            .catch(err => {
                dispatch(signUpFailureAction(err));
            })
    );
};

export const LOG_IN_REQUEST = "LOG_IN";
export const logInAction = () => ({
    type: LOG_IN_REQUEST
});
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const logInSuccessAction = authData => ({
    type: LOG_IN_SUCCESS,
    authData
});
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const logInFailureAction = error => ({
    type: LOG_IN_FAILURE,
    error
});


export const logIn = user => dispatch => {
    dispatch(logInAction());
    return (
        fetch(`${API}/auth/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(loginData => {
                dispatch(logInSuccessAction(loginData));
                return loginData;
            })
            .catch(err => {
                const { code } = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(logInFailureAction(message));
            })
    );
};


