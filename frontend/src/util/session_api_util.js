import axios from 'axios';

// ensure auth token
export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};


export const signup = (userData, history) => {
    return axios.post('/api/users/register', userData);
};


export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};




