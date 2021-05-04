import {RECEIVE_EXCITES, RECEIVE_EXCITE} from '../actions/excite_actions'

const ExcitesReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EXCITES:
            return Object.assign({}, action.excites);
        case RECEIVE_EXCITE: 
            nextState[action.excite._id] = action.excite;
            return nextState;
        default:
            return state;
    }
}

export default ExcitesReducer;