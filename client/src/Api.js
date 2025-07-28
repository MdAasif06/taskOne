/*import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000",
  withCredentials: true
});

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default API;*/
