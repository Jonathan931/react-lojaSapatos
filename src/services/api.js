import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jonathan931/react-lojaSapatos/',
});

export default api;
