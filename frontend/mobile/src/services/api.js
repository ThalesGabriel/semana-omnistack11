import axios from 'axios';


const api = axios.create({
  baseURL: 'http://192.168.0.16:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default api;
