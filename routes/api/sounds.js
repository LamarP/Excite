const express = require('express');
const router = express.Router();
const spotifyKeys = require('../../config/spotify_keys');
const fetch = require("node-fetch");

const _getAuthToken =  async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST', 
        headers: {
            'Authorization': 'Basic ' + Buffer.from(spotifyKeys.clientId + ':' + spotifyKeys.clientSecret).toString('base64'), 
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }, 
        body: 'grant_type=client_credentials'
    })
    const data = await result.json();
    return data.access_token;
};

const _getPlaylist = async (token) => {
    const result =  await fetch("https://api.spotify.com/v1/playlists/0LkCTHKqszwTTe6pY0ZM83?market=US", {
        method: 'GET', 
        headers: { 'Authorization' : 'Bearer ' + token }
    });
    const data = await result.json();
    return data.tracks.items.map(item => item.track)
};

const _getTrack = async (token, trackId) => {
    const result = await fetch(`https://api.spotify.com/v1/tracks/${trackId}?market=US`, {
        method: 'GET', 
        headers: { 'Authorization' : 'Bearer ' + token }
    });
    const data = await result.json();
    return data;
};


router.get('/', async (req, res) => {
    const token = await _getAuthToken();
    const playList = await _getPlaylist(token);
    
    return res.json(playList);

});

router.get('/sound', async (req, res) => {
    const token = await _getAuthToken();
    const track = await _getTrack(token, req.query.trackId)
    console.log(req.query)
    return res.json({token, track})
});

// router.get('/sound', async (req, res) => {
//     res.sendFile('./frontend/public/eye.mp3', { root: __dirname });
// });

module.exports = router;