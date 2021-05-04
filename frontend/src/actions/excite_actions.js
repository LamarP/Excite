import * as exciteUtil from '../util/excite_util';

export const RECEIVE_EXCITES = "RECEIVE_EXCITES";
export const RECEIVE_EXCITE = "RECEIVE_EXCITE";
// export const RECEIVE_EXCITE_ERRORS = "RECEIVE_EXCITE_ERROR";

const receiveExcites = excites => ({
  type: RECEIVE_EXCITES,
  excites
});

const receiveExcite = excite => ({
  type: RECEIVE_EXCITE,
  excite
});

// const receiveExciteErrors = err => ({
//   type: RECEIVE_EXCITE_ERRORS
// })

export const fetchExcites = () => dispatch => (
  exciteUtil.fetchExcites()
    .then((excites) => dispatch(receiveExcites(excites)))
    .catch((err) => console.log(err))
);

export const fetchExcite = exciteId => dispatch => (
  exciteUtil.fetchExcite(exciteId)
    .then(excite => dispatch(receiveExcite(excite)))
);