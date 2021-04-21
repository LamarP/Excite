const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const apiKey = require("../../config/keys");
const Scene = require("../../models/Scene");
const collectionId = require("../../config/keys").collectionId;
const _getVideo = async (videoId) => {
  const result = await fetch(`https://api.pexels.com/videos/videos/${videoId}`,
    {
      method: "GET",
      headers: { 'Authorization': apiKey.apiKey }
    })
  const data = await result.json();
  return data;
}

const _getCollections = async () => {
  const result = await fetch(`https://api.pexels.com/v1/collections/${collectionId}`, {
    method: "GET",
    headers: { 'Authorization': apiKey.apiKey}
  })
  const data = await result.json();
  return data.media;
}

router.get("/scene", async (req, res) => {
  const video = await _getVideo(req.query.videoId);
  // console.log(req.query);
  return res.json(video);
})

router.get("/", async (req, res) => {
  const collection = await _getCollections();
  // console.log(req.query);
  return res.json(collection);
})

router.post("/test", (req, res) => {
  // console.log(req.body);
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
    .catch(err => res.json(err))
  
})

module.exports = router;