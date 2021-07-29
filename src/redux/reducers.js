import { combineReducers } from 'redux';
import eventReducer from './events/reducers';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
    eventReducer,
    authReducer,
});

export default rootReducer;