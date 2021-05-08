const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ExciteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sceneId: {
    type: Schema.Types.ObjectId, 
    ref: 'Scene'
  }, 
  sceneUrl: {
    type: String, 
    required: true
  },
  sceneTitle: {
    type:String, 
    required: true
  },
  sceneImage: {
    type: String, 
    required: true
  },
  users: [
    {type: Schema.Types.ObjectId, ref: "User"}
  ], 
  sounds: [
    {type: String, ref: "Sound"}
  ]
}, {timestamps: true})

module.exports = Excite = mongoose.model('Excite', ExciteSchema);