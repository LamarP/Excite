import * as SoundUtil from '../util/sound_util';

export const RECEIVE_SOUND = 'RECEIVE_SOUND';
export const RECEIVE_SOUND_ERRORS = 'RECEIVE_SOUND_ERRORS'
const receiveSound = sound => ({
    type: RECEIVE_SOUND, 
    sound
});

const receiveSoundErrors = err => ({
    type: RECEIVE_SOUND_ERRORS, 
    err
});

export const fetchSound = sound => dispatch => (
    SoundUtil.fetchSound(sound)
        .then(sound => dispatch(receiveSound(sound)))
        .catch(err => dispatch(receiveSoundErrors(err)))  
);