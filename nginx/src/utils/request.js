import axios from "axios";

export const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

// Add a request interceptor
request.interceptors.request.use(function (config) {
  return config;
});

// Add a response interceptor
request.interceptors.response.use(function (response) {
  return response.data;
});

export default request;
