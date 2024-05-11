import axios from 'axios';
import { Token } from '../../../backend/src/types/Token';
import { LogIn } from '../../../backend/src/types/Login';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

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

export default api;