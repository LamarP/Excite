import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ExciteShow from './excite_show';
import {fetchExcite} from '../../actions/excite_actions';
import {fetchSound} from '../../actions/sound_actions';

const mSTP = (state, ownProps) => ({
    excite: state.excites[ownProps.match.params.id],
    sounds: state.sounds,
    sound: state.sounds[ownProps.match.params.id] 
});

const mDTP = dispatch => ({
    fetchExcite: exciteId => dispatch(fetchExcite(exciteId)), 
    fetchSound: soundId => dispatch(fetchSound(soundId))
});

export default withRouter(connect(mSTP, mDTP)(ExciteShow));