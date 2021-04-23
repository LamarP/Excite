import { connect } from 'react-redux';
import { fetchExcites } from '../../actions/excite_actions';
import ExciteIndex from './excite_index';
// import { fetchScenes, fetchScene } from '../../actions/scene_actions';
const mSTP = (state) => ({
  excites: state.excites
  // scenes: state.scenes,
  // exciteArr: Object.values(state.excites)
});

const mDTP = dispatch => ({
  fetchExcites: () => dispatch(fetchExcites()),
  // fetchScenes: () => dispatch(fetchScenes()),
  // fetchScene: (videoId) => dispatch(fetchScene(videoId))
});

export default connect(mSTP,mDTP)(ExciteIndex);