const express = require('express');
const router = express.Router();
const Excite = require("../../models/Excite");



router.get('/', (req, res) => {
  Excite.find()
    .then(excites => res.json(excites))
    .catch(err => res.status(404).json({ noexcitesfound: 'No excites found' }));
})

router.get('/excite', (req, res) => {
  console.log(req)
  const exciteId = req.query.id
  //change to params
    Excite.findById(exciteId)
      .then((excite) => {
        return res.json(excite);
    })
})

// post, get, delete, update 
// get - request with exciteId, response of an excite instance



module.exports = router;