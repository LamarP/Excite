import {RECEIVE_SOUND, RECEIVE_SOUNDS} from '../actions/sound_actions';

const soundsReducer = (state = {}, action) => {
 
  Object.freeze(state);
  
  const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SOUNDS:
        return Object.assign({}, action.sounds.data);
      
      case RECEIVE_SOUND:
        nextState[action.sound] = action.sound
        return nextState;
        default: 
            return state;
    }
};

export default soundsReducer;