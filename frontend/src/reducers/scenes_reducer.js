import { RECEIVE_ALL_SCENES, RECEIVE_SCENE } from '../actions/scene_actions';

const ScenesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_SCENES:
      return Object.assign({}, action.scenes);
    case RECEIVE_SCENE:
      return Object.assign({}, {[action.scene.data.id]: action.scene});
      // return action.scene
    default:
      return state;
  }
};

export default ScenesReducer;