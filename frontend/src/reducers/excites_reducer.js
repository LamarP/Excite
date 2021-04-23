import { RECEIVE_EXCITES } from '../actions/excite_actions';

const ExciteReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_EXCITES:
      return action.excites.data;
  
    default:
      return state;
  }
}

export default ExciteReducer;