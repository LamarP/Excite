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
  postGoal: async(payload) => {
      const res = new Goal({
        title: payload.title, 
        userId: payload.userId
      });
      const result = await res.save();
      return result;
  }, 
  updateGoal: async(goalId, payload) => {
    const query = {_id: goalId};
    const goal = await Goal.updateOne(query, {
      title: payload.title, 
      userId: payload.userId, 
      $push: {excites: payload.excites}
    });
    return goal;
  },
  removeExcite: async(goalId, payload) => {
    const query = {_id: goalId};
    const goal = await Goal.updateOne(query, {
      title: payload.title, 
      userId: payload.userId, 
      $pull: {excites: payload.excites}
    });
    return goal;
  },
  deleteGoal: async(goalId) => {
      const goal = await Goal.deleteOne({_id: goalId});
      return goalId;
      
  }
}

module.exports = GoalsController;