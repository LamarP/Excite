import axios from 'axios';

export const fetchExcites = () => {
    return axios.get('/api/excites/');
};

export const fetchExcite = (sceneId) => {
    return axios.get('/api/excites/excite', {
        params: {
            sceneId: sceneId
        }
    });
};

export const createExcite = payload => {
    return axios.post('/api/excites/excite', { payload } );
};

export const destroyExcite = exciteId => {
    return axios.delete('/api/excites/excite', { params: { id: exciteId } })
};