import {RECEIVE_SOUND} from '../actions/sound_actions';

const soundsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SOUND: 
            return Object.assign({}, action.sound);
        default: 
            return state;
    }
};

export default soundsReducer;