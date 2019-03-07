import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadAuthData } from '../components/auth/localStorage';
import { setAuthData } from '../components/auth/authActions';
import trailReducer from './trailReducer';
import authReducer from './authReducer';
import commentsReducer from './commentsReducer';
import photoReducer from './photosReducer';

const rootReducer = combineReducers({
    trail: trailReducer,
    comments: commentsReducer,
    photos: photoReducer,
    auth: authReducer,
    form: formReducer
})

const STORE = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
));

const authData = loadAuthData();
if (authData) {
    STORE.dispatch(
        setAuthData(authData)
    );
}

export default STORE;