import { RECEIVE_EXCITES, RECEIVE_EXCITE } from '../actions/excite_actions';

const ExciteReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_EXCITES:
      return action.excites.data;
    case RECEIVE_EXCITE: 
      nextState[action.excite.data._id] = action.excite;
      return nextState;
    default:
      return state;
  }
}

export default ExciteReducer;