const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users', 
    required: true
  },
  excites: [{ type: String, ref: "Excite" }],
}, {
  timestamps: true 
})

module.exports = Goal = mongoose.model('Goal', GoalSchema);