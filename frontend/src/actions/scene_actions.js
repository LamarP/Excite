import * as APIUtil from '../util/scene_util';

export const RECEIVE_ALL_SCENES = 'RECEIVE_ALL_SCENES';
export const RECEIVE_SCENE = 'RECEIVE_SCENE';

// Normal actions


export const receiveAllScenes = (payload) => ({
  type: RECEIVE_ALL_SCENES,
  scenes: payload
});

export const receiveScene = scene => ({
  type: RECEIVE_SCENE,
  scene
});



// Thunk actions

export const fetchScenes = () => dispatch => (
  APIUtil.allScenes().then(res => (
    dispatch(receiveAllScenes(res))
  ))
);

export const fetchScene = (sceneId) => dispatch => (
  APIUtil.fetchScene(sceneId).then(res => (
    dispatch(receiveScene(res))
  ))
);

export const fetchSceneModels = () => dispatch => (
  APIUtil.fetchSceneModels().then(res => (
    dispatch(receiveAllScenes(res))
  ))
)