import axios from "axios";

const instance = axios.create({
  baseURL: 'https://47.122.78.139:8080',
  timeout: 20000,
});

export default instance
