import axios from 'axios';


export const allScenes = () => {
    return axios.get('/api/scenes/');
};


export const fetchScene = (sceneId) => {
    return axios.get(`/api/scenes/scene`, {params: {sceneId: sceneId}});
};