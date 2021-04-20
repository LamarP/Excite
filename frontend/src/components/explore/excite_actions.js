import * as APIUtil from './excite_api_util';

export const RECEIVE_ALL_EXCITES = "RECEIVE_ALL_EXCITES";

export const receiveAllExcites = () => ({
  type: RECEIVE_ALL_EXCITES,
  excites
});



export const fetchAllExcites = () => dispatch => (
    APIUtil.fetchExcites().then((excites) => (
        dispatch(receiveAllExcites(excites))
    ))
);