import axios from "../axios";

const endpoints = {
  getPhoto: (page, limit) => axios.get(`list?page=${page}&limit=${limit}`),
};

export default endpoints;
