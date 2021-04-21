const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/lookback',(req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'lookback.mp3'))
});



module.exports = router;