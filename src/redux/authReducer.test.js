import authReducer from './authReducer';
import * as actions from '../components/auth/authActions';


describe('authReducer', () => {
    const initialTestState = {
        isLoggedIn: false,
        user: null,
        jwt: null,
        authenticating: false,
        error: null
    };

    const testUser = {
        id: '123',
        username: 'testname',
        email: 'test@gmail.com'
    };
    const testAuthData = {
        user: {
            id: '123456789',
            username: "bobross",
            email: "bobross@gmail.com"
        },
        jwt: '12345'
    };


    const testError = { message: 'an error occurred' };

    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual({
            isLoggedIn: false,
            user: null,
            jwt: null,
            authenticating: false,
            error: null
        });
    });

    it('Should return the current stat on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    it('logInAction', () => {
        const state = authReducer(initialTestState, actions.logInAction());
        expect(state).toEqual({
            ...state,
            isLoggedIn: false,
            user: null,
            jwt: null,
            error: null,
            authenticating: true
        });
    });

    it('signUpAction', () => {
        const state = authReducer(initialTestState, actions.signUpAction());
        expect(state).toEqual({
            ...state,
            isLoggedIn: false,
            user: null,
            jwt: null,
            error: null,
            authenticating: true
        });
    });

    it('logInFailureAction', () => {
        const state = authReducer(initialTestState, actions.logInFailureAction(testError));
        expect(state).toEqual({ ...state, error: testError, authenticating: false });
    });

    it('signUpFailureAction', () => {
        const state = authReducer(initialTestState, actions.signUpFailureAction(testError));
        expect(state).toEqual({ ...state, error: testError, authenticating: false });
    });

    it('signUpSuccessAction', () => {
        const state = authReducer(initialTestState, actions.signUpSuccessAction(testUser));
        expect(state).toEqual({ ...state, authenticating: false, });
    });

    it('logInSuccessAction', () => {
        const state = authReducer(initialTestState, actions.logInSuccessAction(testAuthData));
        console.log(testAuthData.authToken)
        expect(state).toEqual({
            ...state,
            authenticating: false,
            isLoggedIn: true,
            user: testAuthData.user,
            jwt: testAuthData.authToken
        });
    });

    it('setAuthData', () => {
        const state = authReducer(initialTestState, actions.setAuthData(testAuthData));
        console.log(testAuthData.authToken)
        expect(state).toEqual({
            ...state,
            authenticating: false,
            isLoggedIn: true,
            user: testAuthData.user,
            jwt: testAuthData.authToken/// should it be jwt: testAuthData.jwt
        });
    });

    it('logout', () => {
        const state = authReducer(initialTestState, actions.logout());
        expect(state).toEqual({ ...state, isLoggedIn: false, user: null, jwt: null })
    });

    it('clearAuthData', () => {
        const state = authReducer(initialTestState, actions.clearAuthData());
        expect(state).toEqual({ ...state, isLoggedIn: false, user: null, jwt: null })
    })

});
