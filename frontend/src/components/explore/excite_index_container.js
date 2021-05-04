import {connect} from 'react-redux';
import {fetchExcites, fetchExcite} from '../../actions/excite_actions';
import {fetchScene, fetchScenes} from '../../actions/scene_actions';
import {fetchSounds} from '../../actions/sound_actions'
import {withRouter} from 'react-router-dom';
import ExciteIndex from './excite_index';

const mSTP = state => ({
    excites: Object.values(state.excites), 
    scenes: state.scenes, 
    sounds: Object.values(state.sounds)
});

const mDTP = dispatch => ({
    fetchExcites: excites => dispatch(fetchExcites(excites)),
    fetchExcite: exciteId => dispatch(fetchExcite(exciteId)),
    fetchScene: scene => dispatch(fetchScene(scene)), 
    fetchScenes: () => dispatch(fetchScenes()), 
    fetchSounds: () => dispatch(fetchSounds())
});

export default withRouter(connect(mSTP, mDTP)(ExciteIndex));