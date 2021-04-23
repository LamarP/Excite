import axios from 'axios';


export const fetchExcites = () => {
  return axios.get('/api/excites')
}

export const fetchExcite = exciteId => {
  return axios.get('/api/excites/excite', {params: exciteId})
}