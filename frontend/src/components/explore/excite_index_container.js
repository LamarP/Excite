import {connect} from 'react-redux';
import {fetchExcites, createExcite} from '../../actions/excite_actions';
import {withRouter} from 'react-router-dom';
import ExciteIndex from './excite_index';

const mSTP = state => ({
    excites: Object.values(state.excites)
});

const mDTP = dispatch => ({
    fetchExcites: excites => dispatch(fetchExcites(excites)), 
    createExcite: excite => dispatch(createExcite(excite))
});

export default withRouter(connect(mSTP, mDTP)(ExciteIndex));