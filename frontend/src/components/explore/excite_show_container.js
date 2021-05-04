// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
// import ExciteShow from './excite_show';
// import {fetchScene} from '../../actions/scene_actions'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ExciteShow from './excite_show';
import {fetchScene} from '../../actions/scene_actions'
import {fetchSound} from '../../actions/sound_actions'

const mSTP = (state, ownProps) => ({
    scene: state.scenes.data[ownProps.match.params.id], 
    sounds: state.sounds,
    sound: state.sounds[ownProps.match.params.id] 
});

const mDTP = dispatch => ({
    fetchScene: sceneId => dispatch(fetchScene(sceneId)), 
    fetchSound: sound => dispatch(fetchSound(sound))
});

export default withRouter(connect(mSTP, mDTP)(ExciteShow));