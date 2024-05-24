import { Cookies } from "react-cookie";
import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;

export const jsonAxios = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json"
  }
})

export const formDataAxios = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});



const addAuthToken = (instance) => {
  // intercopters request
  instance.interceptors.request.use(
    (config) => {
      const accessToken = new Cookies().get("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  // intercopters response
  instance.interceptors.response.use(
    (response) => response,
    (error) => error.response
  );
};

addAuthToken(jsonAxios)