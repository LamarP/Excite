import {
  RECEIVE_EXCITES,
  RECEIVE_EXCITE,
  START_LOADING_EXCITES,
  START_LOADING_EXCITE
} from '../actions/excite_actions';

import {
  RECEIVE_SOUNDS,
  RECEIVE_SOUND,
  START_LOADING_SOUNDS,
  START_LOADING_SOUND
} from '../actions/sound_actions';

import {
  RECEIVE_ALL_SCENES,
  RECEIVE_SCENE,
  START_LOADING_SCENES,
  START_LOADING_SCENE
} from '../actions/scene_actions';

import {
  RECEIVE_ALL_GOALS,
  RECEIVE_GOAL,
  START_LOADING_GOALS,
  START_LOADING_GOAL
} from '../actions/goal_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EXCITES:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_EXCITE:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_EXCITES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_EXCITE:
      return Object.assign({}, state, { detailLoading: true });
    case RECEIVE_SOUNDS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_SOUND:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_SOUNDS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SOUND:
      return Object.assign({}, state, { detailLoading: true });
    case RECEIVE_ALL_SCENES:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_SCENE:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_SCENES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SCENE:
      return Object.assign({}, state, { detailLoading: true });
    case RECEIVE_ALL_GOALS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_GOAL:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_GOALS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_GOAL:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;