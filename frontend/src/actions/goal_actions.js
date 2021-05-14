import * as APIUtil from '../util/goal_util';

export const RECEIVE_ALL_GOALS = 'RECEIVE_ALL_GOALS';
export const RECEIVE_GOAL = 'RECEIVE_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const REMOVE_EXCITE = 'REMOVE_EXCITE';

// Normal actions


export const receiveAllGoals = goals => ({
  type: RECEIVE_ALL_GOALS,
  goals
});

export const receiveGoal = goal => ({
  type: RECEIVE_GOAL,
  goal
});

export const removeGoal = id => ({
  type: REMOVE_GOAL,
  _id: id
});

export const deleteExcite = goal => ({
  type: REMOVE_EXCITE, 
  goal
})


// Thunk actions

export const fetchGoals = () => dispatch => (
  APIUtil.allGoals().then(res => (
    dispatch(receiveAllGoals(res))
  ))
);

export const fetchUserGoals = userId => dispatch => (
  APIUtil.userGoals(userId).then(res => (
    dispatch(receiveAllGoals(res))
  ))
)

export const fetchGoal = (goalId) => dispatch => (
  APIUtil.fetchGoal(goalId).then(res => (
    dispatch(receiveGoal(res))
  ))
);

export const createGoal = (goal) => dispatch => (
  APIUtil.postGoal(goal).then(res => (
    dispatch(receiveGoal(res))
  ))
);

export const updateGoal = (goal) => dispatch => (
  APIUtil.patchGoal(goal).then(res => (
    dispatch(receiveGoal(res))
  ))
);
export const removeExcite = (goal) => dispatch => (
  APIUtil.removeExcite(goal).then(res => (
    dispatch(deleteExcite(res))
  ))
);

export const deleteGoal = (goalId) => dispatch => (
  APIUtil.destroyGoal(goalId).then((_id) => (
    dispatch(removeGoal(_id))
  ))
);
