const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ExciteSchema = new Schema({
  exciteId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  sound: {
    type: Schema.Types.ObjectId,
    ref: 'Sound'
  },
  scene: {
    type: Schema.Types.ObjectId,
    ref: 'Scene'
  }
  
})

module.exports = Excite = mongoose.model('Excite', ExciteSchema);