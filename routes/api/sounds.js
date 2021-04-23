const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs');
const Sound = require('../../models/Sound');
// router.get('/sound', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../frontend/public/songs', `${req.query.soundTitle}.mp3`))
// });

router.get('/', (req, res) => {
    fs.readdir(path.join(__dirname, '../../frontend/public/songs'), (err, files) => res.send(files));
});

router.get('/dna', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'dna.mp3'))
})
router.get('/humble', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'humble.mp3'))
})
router.get('/lookback', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'lookback.mp3'))
})

router.get('/sound', (req, res) => {
  const soundId = req.query.id;
    Sound.findById(soundId)
      .then((sound) => {
        return res.json(sound);
    })
})

module.exports = router;