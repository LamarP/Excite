import * as SoundUtil from '../util/sound_util';

export const RECEIVE_SOUND = 'RECEIVE_SOUND';
export const RECEIVE_SOUNDS = 'RECEIVE_SOUNDS';
export const RECEIVE_SOUND_ERRORS = 'RECEIVE_SOUND_ERRORS'
const receiveSound = sound => ({
    type: RECEIVE_SOUND, 
    sound
});

const receiveSounds = sounds => ({
    type: RECEIVE_SOUNDS, 
    sounds
})

const receiveSoundErrors = err => ({
    type: RECEIVE_SOUND_ERRORS, 
    err
});

export const fetchSound = sound => dispatch => (
    SoundUtil.fetchSound(sound)
        .then(sound => dispatch(receiveSound(sound)))
        .catch(err => dispatch(receiveSoundErrors(err)))  
);

export const fetchSounds = sounds => dispatch => (
    SoundUtil.fetchSounds(sounds)
        .then(sounds => receiveSounds(sounds))
        .catch(err => dispatch(receiveSoundErrors(err)))
);