import axios from 'axios';

export const fetchSound = (soundTitle) => {
    return axios.get(`/api/sounds/${soundTitle}`)
};

export const fetchSounds = () => {
    return axios.get('/api/sounds')
};