import axios from "axios";

const instance = axios.create({
  baseURL: 'http://47.122.78.139',
  timeout: 20000,
});

export default instance
