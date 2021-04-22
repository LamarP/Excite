const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs');

router.get('/lookback',(req, res) => {
    // res.set('content-type', 'audio/mp3')
    res.sendFile(path.join(__dirname, '../../frontend/public/songs', '1.mp3'))
});

router.get('/', (req, res) => {
    fs.readdir(path.join(__dirname, '../../frontend/public/songs'), (err, files) => console.log(files));
});


module.exports = router;