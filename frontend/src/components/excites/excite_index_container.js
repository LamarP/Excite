import { connect } from 'react-redux';
import ExciteIndex from './excite_index';
import { fetchExcites } from '../../actions/excite_actions';

const mSTP = (state) => ({
  
    excites: Object.values(state.excites)
  
});

const mDTP = dispatch => ({
  fetchExcites: () => dispatch(fetchExcites())
});

export default connect(mSTP, mDTP)(ExciteIndex);