import {
  RECEIVE_ALL_EXCITES
} from './excite_actions';

const ExcitesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EXCITES:
      return Object.assign({}, action.excites)
    default: 
      return state;
  }
}

export default ExcitesReducer;