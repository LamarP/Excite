const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema = new Schema({
  pexelId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, 
    required: true
  }, 
  videoUrl: {
    type: String, 
    required: true
  }
}, {
  timestamps: true 
})

module.exports = Scene = mongoose.model('Scene', SceneSchema);