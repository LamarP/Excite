import {RECEIVE_SOUND, RECEIVE_SOUNDS} from '../actions/sound_actions';

const soundsReducer = (state = {}, action) => {
 
  Object.freeze(state);
  
 
    switch(action.type) {
      case RECEIVE_SOUNDS:
        return Object.assign({}, action.sounds.data);
      case RECEIVE_SOUND:
        return action.sound;
        default: 
            return state;
    }
};

export default soundsReducer;