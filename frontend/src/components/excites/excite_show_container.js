import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchScene, fetchScenes} from '../../actions/scene_actions';
import {fetchExcite} from '../../actions/excite_actions'
import {getSound} from '../../actions/sound_actions';
import ExciteShow from './excite_show';

const mSTP = (state, ownProps) => ({
    // sceneId: ownProps.match.params.id, 
    scene: state.scenes,
    exciteId: ownProps.match.params.id, 
    excite: state.excites[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchScene: videoId => dispatch(fetchScene(videoId)), 
    getSound: soundId => dispatch(getSound(soundId)), 
    fetchExcite: excitedId => dispatch(fetchExcite(excitedId))
});

export default withRouter(connect(mSTP, mDTP)(ExciteShow));