import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
// Automatically attach the token to every request
api.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(localStorage.getItem("profile"));
    console.log(userData.token,"this is token")
    if (userData.token) {
      config.headers.Authorization = Bearer `${userData.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);