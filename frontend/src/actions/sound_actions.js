import * as APIUtil from '../util/sounds_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_TRACK = "RECEIVE_TRACK";

// Normal Actions

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
})


// Thunk Actions

export const fetchPlaylist = () => dispatch => (
  APIUtil.playlist().then( (playlist) => {
    dispatch(receivePlaylist(playlist))
  })
);

export const fetchTrack = trackId => dispatch => (
  APIUtil.track(trackId).then( (track) => {
    dispatch(receiveTrack(track))
  })
);