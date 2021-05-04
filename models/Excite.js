const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ExciteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  scene: {
    type: Schema.Types.ObjectId, 
    ref: 'Scene'
  }, 
  users: [
    {type: Schema.Types.ObjectId, ref: "User"}
  ], 
  sounds: [
    {type: Schema.Types.ObjectId, ref: "Sound"}
  ]
}, {timestamps: true})

module.exports = Excite = mongoose.model('Excite', ExciteSchema);