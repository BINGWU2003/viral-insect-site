import axios from "axios";

const instance = axios.create({
  baseURL: 'http://159.75.249.56:8090',
  timeout: 20000,
});

export default instance
