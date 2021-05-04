import axios from 'axios';

export const fetchExcites = () => {
    return axios.get('/api/excites/');
};

export const fetchExcite = (sceneId) => {
    return axios.get('/api/excites/excite', {
        params: {
            sceneId: sceneId
        }
    })
}