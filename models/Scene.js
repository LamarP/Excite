const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SceneSchema = new Schema({
  sceneId: {
    type: String,
    required: true
    
  },
  name: {
    type: String,
    required: true
  },
  excite: {
    type: Schema.Types.ObjectId,
    ref: "Excite"
  }

}, {
  timestamps: true 
})

module.exports = Scene = mongoose.model('Scene', SceneSchema);