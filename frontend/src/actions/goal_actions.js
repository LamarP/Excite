import * as APIUtil from '../util/goal_util';

export const RECEIVE_ALL_GOALS = 'RECEIVE_ALL_GOALS';
export const RECEIVE_GOAL = 'RECEIVE_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// Normal actions


export const receiveAllGoals = (payload) => ({
  type: RECEIVE_ALL_GOALS,
  goals: payload
});

export const receiveGoal = goal => ({
  type: RECEIVE_GOAL,
  goal
});

export const removeGoal = goalId => ({
  type: REMOVE_GOAL,
  goalId
});


// Thunk actions

export const fetchGoals = () => dispatch => (
  APIUtil.allGoals().then(res => (
    dispatch(receiveAllGoals(res))
  ))
);

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

export const deleteGoal = (goalId) => dispatch => (
  APIUtil.deleteGoal(goalId).then(() => (
    dispatch(removeGoal(goalId))
  ))
);