import axios from 'axios';

export const fetchExcites = () => {
  return axios.get('/api/explore')
}
