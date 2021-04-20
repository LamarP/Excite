const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SoundSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  soundUrl: {
    type: String, 
    required: true
  }
}, {
  timestamps: true 
})

module.exports = Sound = mongoose.model('Sound', SoundSchema);