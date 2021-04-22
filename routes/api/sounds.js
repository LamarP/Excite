const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/lookback',(req, res) => {
    // res.set('content-type', 'audio/mp3')
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'lookback.mp3'))
});

router.get('/', (req, res) => {
    
    const songsPath = path.join(__dirname, '../../frontend/public/songs')
    console.log(songsPath);
   
})


module.exports = router;