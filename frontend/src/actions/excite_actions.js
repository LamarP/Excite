import * as exciteUtil from '../util/excite_util';

export const RECEIVE_EXCITES = "RECEIVE_EXCITES";
export const RECEIVE_EXCITE = "RECEIVE_EXCITE";

const receiveExcites = (excites) => ({
  type: RECEIVE_EXCITES,
  excites
});

const receiveExcite = excite => ({
  type: RECEIVE_EXCITE, 
  excite
})

export const fetchExcites = () => dispatch => (
  exciteUtil.fetchExcites()
  .then(excites => dispatch(receiveExcites(excites)))
)

export const fetchExcite = exciteId => dispatch => (
  exciteUtil.fetchExcite(exciteId)
    .then(excite => dispatch(receiveExcite(excite)))
)