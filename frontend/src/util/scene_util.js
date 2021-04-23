import axios from 'axios';


export const allScenes = () => {
    return axios.get('/api/scenes/');
};


export const scene = (sceneId) => {
    return axios.get(`/api/scenes/scene`,{params:{sceneId}});
};