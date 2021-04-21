import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import sounds from './sounds_reducer';

const RootReducer = combineReducers({
    session,
    sounds,
    errors
});

export default RootReducer;