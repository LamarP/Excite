const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password2: {
    type: String, 
    required: true
  }, 
  excites: [
    {type: Schema.Types.ObjectId, ref: "Excite"}
  ]
}, {
  timestamps: true 
})

module.exports = User = mongoose.model('User', UserSchema);