import axios from 'axios';



export const playlist = () => {
    return axios.get('/api/sounds/');
};

export const track = (trackId) => {
    return axios.get(`/api/sounds/sound/`, {params: {trackId}});
};

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });