import {connect} from 'react-redux';
import {createExcite} from '../../actions/excite_actions';
import {fetchSceneModels} from '../../actions/scene_actions'
import {fetchSounds} from '../../actions/sound_actions'
import ExciteModal from './excite_modal';

const mSTP = state => ({
    user: state.session.user, 
    scenes: state.scenes.data, 
    sounds: Object.values(state.sounds)
});

const mDTP = dispatch => ({
    processForm: payload => dispatch(createExcite(payload)), 
    fetchSceneModels: () => dispatch(fetchSceneModels()), 
    fetchSounds: () => dispatch(fetchSounds())
});

export default connect(mSTP, mDTP)(ExciteModal);

