import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import scenes from './scenes_reducer';
import sounds from './sounds_reducer';
import excites from './excites_reducer';
const RootReducer = combineReducers({
    session,
    scenes,
    errors, 
  sounds,
    excites
});

export default RootReducer;