import axios from 'axios';


export const allGoals = () => {
    return axios.get('/api/goals/');
};


export const fetchGoal = (goalId) => {
    return axios.get(`/api/goals/goal`, { params: { goalId: goalId } });
};

export const postGoal = (goal) => {
    return axios.post(`/api/goals/goal`, goal);
};

export const patchGoal = (goal) => {
    return axios.patch('/api/goals/goal', { goalId: goal._id, goal} )
};

export const destroyGoal = (goalId) => {
    return axios.delete('/api/goals/goal', { params: {goalId: goalId}});
};