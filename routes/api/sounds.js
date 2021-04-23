const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs');

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

router.get('/onion', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'onion.mp3'))
})

router.get('/riot', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'riot.mp3'))
})

router.get('/fire', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'fire.mp3'))
})

router.get('/animal', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'animal.mp3'))
})

router.get('/change', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'change.mp3'))
})

router.get('/crossing', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'crossing.mp3'))
})

router.get('/tiger', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'tiger.mp3'))
})

router.get('/roses', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'roses.mp3'))
})

router.get('/lean', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', 'lean.mp3'))
})


module.exports = router;