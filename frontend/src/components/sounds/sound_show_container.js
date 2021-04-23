import {fetchSound} from '../../actions/sound_actions';
import SoundShow from './sound_show';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom'; 
const mSTP = (state,ownProps) => ({
    sound: state.sounds[ownProps.match.params.soundId],
    sounds: state.sounds
});

const mDTP = dispatch => ({
    fetchSound: soundTitle => dispatch(fetchSound(soundTitle)),
    
});

export default withRouter(connect(mSTP, mDTP)(SoundShow));