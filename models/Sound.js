const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SoundSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  soundUrl: {
    type: String, 
    required: true
  }, 
  excites: [
    {type: Schema.Types.ObjectId, ref: 'Excite'},
  ]
}, {
  timestamps: true 
})

module.exports = Sound = mongoose.model('Sound', SoundSchema);