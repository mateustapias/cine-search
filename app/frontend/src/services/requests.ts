import axios from 'axios';
import { Token } from '../../../backend/src/types/Token';
import { LogIn } from '../../../backend/src/types/Login';
import { SignUp } from '../../../backend/src/types/SignUp';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
});

export const setToken = (token: Token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogIn = async (body: LogIn) => {
  const endpoint = '/user/logIn';
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestSignUp = async (body: SignUp) => {
  const endpoint = 'user/signUp';
  const { data } = await api.post(endpoint, body);
  return data;
};

// TODO: usar apenas o RequestData
export const requestMovies = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
