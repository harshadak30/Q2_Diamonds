
import axios from "axios";

const axiosInstance = axios.create({

 baseURL: "http://192.168.29.253:8002/",
  //  baseURL:"http://34.197.250.249:8000/",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
export default axiosInstance;