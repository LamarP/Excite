const express = require('express');
const router = express.Router();
const ExcitesController = require('../../controllers/excites');

router.get('/', async (req, res) => {
    const excites = await ExcitesController.index();
    res.send(excites);
 
});

router.get('/excite', async(req, res) => {
    const excite = await ExcitesController.getExcite(req.query.exciteId);
    res.send(excite);
});

router.post('/excite', async(req, res) => {

    const excite = await ExcitesController.createExcite(req.body.payload); 
    res.send(excite);
});

router.delete('/excite', async(req, res) => {
    const excite = await ExcitesController.deleteExcite(req.query.id);
    res.send(excite);
});

module.exports = router;