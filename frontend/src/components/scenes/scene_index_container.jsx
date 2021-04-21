import { connect } from 'react-redux';
import SceneIndex from './scene_index';
import { fetchScenes } from '../../actions/scene_actions';

const mSTP = (state) => ({
  scenes: state.scenes.data
});

const mDTP = dispatch => ({
  fetchScenes: () => dispatch(fetchScenes())
});

export default connect(mSTP,mDTP)(SceneIndex);