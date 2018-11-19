import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import trailReducer from './trailReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    trail: trailReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
));

export default store;