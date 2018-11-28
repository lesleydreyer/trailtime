import * as actions from '../components/auth/authActions';
import { saveAuthData, clearAuthData } from '../components/auth/localStorage';

const initialState = {
    isLoggedIn: false,
    user: null,
    jwt: null,
    authenticating: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (
        action.type === actions.LOG_IN_REQUEST ||
        action.type === actions.SIGN_UP_REQUEST
    ) {
        return {
            ...state,
            isLoggedIn: false,
            user: null,
            jwt: null,
            error: null,
            authenticating: true
        };
    } else if (
        action.type === actions.LOG_IN_FAILURE ||
        action.type === actions.SIGN_UP_FAILURE
    ) {
        console.log('ACTIONERROR', action.error);
        return {
            ...state,
            error: action.error,
            authenticating: false
        };
    } else if (
        action.type === actions.SIGN_UP_SUCCESS
    ) {
        return {
            ...state,
            authenticating: false
        };
    } else if (
        action.type === actions.LOG_IN_SUCCESS ||
        action.type === actions.SET_AUTH_DATA
    ) {
        saveAuthData(action.authData);
        return {
            ...state,
            authenticating: false,
            isLoggedIn: true,
            user: action.authData.user,
            jwt: action.authData.jwt
        };
    } else if (
        action.type === actions.LOGOUT ||
        action.type === actions.CLEAR_AUTH_DATA
    ) {
        clearAuthData();
        return { ...state, isLoggedIn: false, user: null, jwt: null };
    }
    return state;
}