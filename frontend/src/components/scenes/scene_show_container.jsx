import { connect } from 'react-redux';
import { fetchScenes } from '../../actions/scene_actions';
import SceneShow from './scene_show';

const mSTP = (state, ownProps) => ({
  scenes: state.scenes.data[ownProps.match.params.id]
  // state: state
});

const mDTP = dispatch => ({
  fetchScenes: () => dispatch(fetchScenes())
});

export default connect(mSTP, mDTP)(SceneShow);