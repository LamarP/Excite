import * as ExciteUtil from '../util/excite_util';

export const RECEIVE_EXCITES = "RECEIVE_EXCITES";
export const RECEIVE_EXCITE = "RECEIVE_EXCITE";

const receiveExcites = excites => ({
    type: RECEIVE_EXCITES,
    excites
});

const receiveExcite = excite => ({
    type: RECEIVE_EXCITE, 
    excite
});


export const fetchExcites = excites => dispatch => (
    ExciteUtil.fetchExcites()
        .then(excites => dispatch(receiveExcites(excites.data)))
);

export const fetchExcite = exciteId => dispatch => (
    ExciteUtil.fetchExcite(exciteId)
        .then(excite => dispatch(receiveExcite(excite.data)))
);