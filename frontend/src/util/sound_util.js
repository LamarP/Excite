import axios from 'axios';

export const fetchSound = (soundTitle) => {
    return axios.get(`/api/sounds/${soundTitle}`)
};