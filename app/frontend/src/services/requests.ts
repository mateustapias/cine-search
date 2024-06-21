import axios from 'axios';
// import { Token } from '../../../backend/src/types/Token';
import { LogIn } from '../../../backend/src/types/Login';
import { SignUp } from '../../../backend/src/types/SignUp';
import { Review } from '../../types';
// TODO: aplicar barrel nesses tipos acima

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);

  return data;
};

export const requestLogIn = async (body: LogIn) => {
  const endpoint = 'user/logIn';
  const { data } = await api.post(endpoint, body);

  return data;
};

export const requestSignUp = async (body: SignUp) => {
  const endpoint = 'user/signUp';
  const { data } = await api.post(endpoint, body);

  return data;
};

// Todo: talvez criar um argumento do tipo 'add' | 'update' e colocar
// Todo: requestAddReview e requestUpdateReview em uma única função
export const requestAddReview = async (body: Review): Promise<Review> => {
  const endpoint = 'reviews/create';
  const { data } = await api.post(endpoint, body);

  return data;
};

export const requestUpdateReview = async (body: Review): Promise<Review> => {
  const endpoint = 'reviews/update';
  const { data } = await api.patch(endpoint, body);

  return data;
};

export default api;
