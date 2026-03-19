import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 20000,
});

export default instance
