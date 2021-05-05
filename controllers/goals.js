const Goal = require('../models/Goal');

const GoalsController = {
  index: async(userId) => {
      const result = await Goal.find({userId: userId });
      return result;
  },
  getGoal: async(id) => {
      const result = await Goal.findById(id);
      return result;
  },
  postGoal: async(title) => {
      const goal = new Goal({title: title});
      const result = await goal.save();
      return result;
  }, 
  updateGoal: async(goalId, payload) => {
    const query = {_id: goalId};
    const goal = await Goal.updateOne(query, payload);
    return goal;
  },
  deleteGoal: async(goalId) => {
      const goal = await Goal.deleteOne({_id: goalId});
      return goal;
  }
}

module.exports = GoalsController;