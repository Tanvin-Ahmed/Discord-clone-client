import axios from "axios";

axios.defaults.baseURL = "https://d-clone-server.onrender.com";
axios.defaults.timeout = 15000;
axios.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("discord-user");

    if (userDetails) {
      const { token } = JSON.parse(userDetails);
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
