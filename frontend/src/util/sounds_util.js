import axios from 'axios';



export const playlist = () => {
    return axios.get('/api/sounds/');
};

export const track = (trackId) => {
    return axios.get('/api/sounds/sound', trackId);
};