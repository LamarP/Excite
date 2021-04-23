const express = require('express');
const router = express.Router();
const Excite = require("../../models/Excite");

router.get('/', (req, res) => {
  Excite.find()
    .then(excites => {
      if (!excites) { return res.Status(400) }
      res.json(excites);
    })
})

router.get('/excite', (req, res) => {
  console.log(req)
  const exciteId = req.query['0']
  //change to params
    Excite.findById(exciteId)
      .then((excite) => {
        return res.json(excite);
    })
})

// post, get, delete, update 
// get - request with exciteId, response of an excite instance



module.exports = router;