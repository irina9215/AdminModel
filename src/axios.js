import axios from 'axios';

export default axios.create({
  baseURL: '/gamma-projectx',
  responseType: 'json'
});