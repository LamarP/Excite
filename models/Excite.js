const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ExciteSchema = new Schema({
  exciteId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
  
})

module.exports = Excite = mongoose.model('Excite', ExciteSchema);