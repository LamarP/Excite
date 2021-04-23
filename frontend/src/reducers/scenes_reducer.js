import { RECEIVE_ALL_SCENES, RECEIVE_SCENE } from '../actions/scene_actions';

const ScenesReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_SCENES:
      return Object.assign({}, action.scenes);
    case RECEIVE_SCENE:
      nextState[action.scene.id] = action.scene
      return nextState
      // return action.scene
    default:
      return state;
  }
};

export default ScenesReducer;