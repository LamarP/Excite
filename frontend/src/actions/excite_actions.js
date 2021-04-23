import * as exciteUtil from '../util/excite_util';

export const RECEIVE_EXCITES = "RECEIVE_EXCITES";

const receiveExcites = (excites) => ({
  type: RECEIVE_EXCITES,
  excites
});

export const fetchExcites = () => dispatch => (
  exciteUtil.fetchExcites()
  .then(excites => dispatch(receiveExcites(excites)))
)