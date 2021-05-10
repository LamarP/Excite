const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const apiKey = require("../../config/keys");
const ScenesController = require('../../controllers/scenes');
const collectionId = require("../../config/keys").collectionId;

const _getCollections = async () => {
  const result = await fetch(`https://api.pexels.com/v1/collections/${collectionId}`, {
    method: "GET",
    headers: { 'Authorization': apiKey.apiKey}
  })
  const data = await result.json();
  return data.media;
}

router.get("/scene", async (req, res) => {
  const scene = await ScenesController.getScene(req.query.sceneId)
  return res.json(scene);
})

router.get("/", async (req, res) => {
  const collection = await _getCollections();
  return res.json(collection);
})

router.post("/test", (req, res) => {
  const newScene = new Scene({
    sceneId: req.body.sceneId,
    name: req.body.name
  })
  newScene.save()
    .then((data) => {
      res.json({
        success: true,
        data
      });
    })
    .catch(err => console.log(err))
  
})

module.exports = router;