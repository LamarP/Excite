import {fetchSound, fetchSounds} from '../../actions/sound_actions';
import SoundsIndex from './sounds_index';
import {connect} from 'react-redux';
const mSTP = state => ({
    sound: state.sounds
});

const mDTP = dispatch => ({
    fetchSound: soundTitle => dispatch(fetchSound(soundTitle)),
    fetchSounds: () => dispatch(fetchSounds())
});

export default connect(mSTP, mDTP)(SoundsIndex);


