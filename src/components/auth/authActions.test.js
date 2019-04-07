import * as actions from './authActions';

export const authData = {
    user: {
        id: '123456789',
        username: "bobross",
        email: "bobross@gmail.com"
    },
    jwt: '12345'
};

const error = 'test error';

describe('setAuthData', () => {
    it('Should return the action', () => {
        const action = actions.setAuthData(authData);
        expect(action.type).toEqual(actions.SET_AUTH_DATA);
        expect(action.type).not.toEqual(actions.CLEAR_AUTH_DATA);
        expect(action.authData).toEqual(authData);
        expect(action.authData).not.toEqual('aaa');
    });
});

describe('clearAuthData', () => {
    it('Should return the action', () => {
        const action = actions.clearAuthData();
        expect(action.type).toEqual(actions.CLEAR_AUTH_DATA);
        expect(action.type).not.toEqual(actions.SET_AUTH_DATA);
    });
});

describe('logout', () => {
    it('Should return the action', () => {
        const action = actions.logout();
        expect(action.type).toEqual(actions.LOGOUT);
        expect(action.type).not.toEqual(actions.LOG_IN_REQUEST);
    });
});

describe('signUpAction', () => {
    it('Should return the action', () => {
        const action = actions.signUpAction();
        expect(action.type).toEqual(actions.SIGN_UP_REQUEST);
        expect(action.type).not.toEqual(actions.LOG_IN_REQUEST);
    });
});

describe('signUpSuccessAction', () => {
    it('Should return the action', () => {
        const action = actions.signUpSuccessAction(authData.user);
        expect(action.type).toEqual(actions.SIGN_UP_SUCCESS);
        expect(action.type).not.toEqual(actions.SIGN_UP_FAILURE);
        expect(action.user).toEqual(authData.user);
        expect(action.user).not.toEqual({
            id: 'abcdef',
            username: "janedoe",
            email: "janedoe@gmail.com"
        });
    });
});

describe('signUpFailureAction', () => {
    it('Should return the action', () => {
        const action = actions.signUpFailureAction(error);
        expect(action.type).toEqual(actions.SIGN_UP_FAILURE);
        expect(action.type).not.toEqual(actions.SIGN_UP_SUCCESS);
        expect(action.error).toEqual(error);
        expect(action.error).not.toEqual('aaa');
    });
});

describe('logInAction', () => {
    it('Should return the action', () => {
        const action = actions.logInAction();
        expect(action.type).toEqual(actions.LOG_IN_REQUEST);
        expect(action.type).not.toEqual(actions.SIGN_UP_REQUEST);
    });
});

describe('logInSuccessAction', () => {
    it('Should return the action', () => {
        const action = actions.logInSuccessAction(authData);
        expect(action.type).toEqual(actions.LOG_IN_SUCCESS);
        expect(action.type).not.toEqual(actions.LOG_IN_FAILURE);
        expect(action.authData).toEqual(authData);
        expect(action.authData).not.toEqual({
            id: 'abcdef',
            username: "jane",
            password: "doe",
            email: "aaaa@gmail.com"
        });
    });
});

describe('logInFailureAction', () => {
    it('Should return the action', () => {
        const action = actions.logInFailureAction(error);
        expect(action.type).toEqual(actions.LOG_IN_FAILURE);
        expect(action.type).not.toEqual(actions.LOG_IN_SUCCESS);
        expect(action.error).toEqual(error);
        expect(action.error).not.toEqual('aaa');
    });
});