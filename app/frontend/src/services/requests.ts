import axios from 'axios';
import { Token } from '../../../backend/src/types/Token';
import { LogIn } from '../../../backend/src/types/Login';
import { SignUp } from '../../../backend/src/types/SignUp';

const api = axios.create({
  baseURL: 'https://cine-search-pxki.onrender.com',
  // baseURL: import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
});

// var axios = require("axios").default;

// var options = { method: 'GET', url: 'https://cine-search-pxki.onrender.com/movies/many' };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

export const setToken = (token: Token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogIn = async (endpoint: string, body: LogIn) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestSignUp = async (endpoint: string, body: SignUp) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

// export const requestMovies = async (endpoint: string) => {
//   const { data } = await api.get(endpoint);
//   return data;
// };

export const requestMovies = async (endpoint: string) => {
  const options = { method: 'GET', url: 'https://cine-search-pxki.onrender.com/movies/many' };

  axios.request(options).then(function (response) {
    console.log(response.data);
    return response
  }).catch(function (error) {
    console.error(error);
  });
}


export default api;
