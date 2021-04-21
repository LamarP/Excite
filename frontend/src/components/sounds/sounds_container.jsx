import { connect } from 'react-redux';
import SoundIndex from './sound_index';
import { fetchPlaylist, fetchTrack } from '../../actions/sound_actions';

const mSTP = (state) => ({
  playlist: state.sounds.data,
  track: state.sounds.track
})

const mDTP = (dispatch) => ({
  fetchPlaylist: () => dispatch(fetchPlaylist()),
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
})

export default connect(mSTP,mDTP)(SoundIndex);