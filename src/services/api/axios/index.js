import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://picsum.photos/v2/",
});

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
