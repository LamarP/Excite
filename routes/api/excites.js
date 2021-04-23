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


// post, get, delete, update 
// get - request with exciteId, response of an excite instance



module.exports = router;