const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  excite: {
    type: Schema.Types.ObjectId,
    ref: 'excites'
  }

}, {
  timestamps: true 
})

module.exports = Goal = mongoose.model('Goal', GoalSchema);