import axios from 'axios';

// create axios
const instance = axios.create({
  baseURL: 'http://10.179.3.53:3000/',
  timeout: 1000,
});

export default instance;
