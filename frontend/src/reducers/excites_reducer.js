
import { RECEIVE_EXCITES, RECEIVE_EXCITE } from '../actions/excite_actions';

const ExcitesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EXCITES:
      // return console.log(action);
       return Object.assign({}, action.excites.data, state);
    case RECEIVE_EXCITE:
      nextState[action.excite._id] = action.excite;
      return nextState;
    default:
      return state;
  }
}

 export default ExcitesReducer;

// const ExcitesReducr = (state = { all: {}, user: {} }, action) => {
//   Object.freeze(state);
//   let newState = Object.assign({}, state);
//   switch(action.type) {
//     case RECEIVE_EXCITE:
//       newState.all = action.excites.data;
//       return newState;
//     case RECEIVE_EXCITE:
//       newState.new = action.excite.data
//       return newState;
//     default:
//       return state;
//   }
// };

