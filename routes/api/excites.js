const express = require('express');
const router = express.Router();
const ExcitesController = require('../../controllers/excites');
const ScenesController = require('../../controllers/scenes');


router.get('/', async (req, res) => {
    const excites = await ExcitesController.index()
    res.send(excites)
 
});

router.get('/excite', async(req, res) => {
    const excite = await ExcitesController.getExcite(req.query.exciteId)
    res.send(excite)
})

router.post('/excite', async(req, res) => {
    const excite = await ExcitesController.createExcite(req.query.payload); 
    res.send(excite)
})
module.exports = router;