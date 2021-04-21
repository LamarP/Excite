import {
  RECEIVE_PLAYLIST,
  RECEIVE_TRACK
} from '../actions/sound_actions';

const soundsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, action.playlist)
    case RECEIVE_TRACK:
      return Object.assign({}, {[action.track.id]: action.track})
    default:
      return state
  }
}

export default soundsReducer;