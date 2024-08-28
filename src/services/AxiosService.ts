import axios from 'axios';
import type { AxiosInstance } from 'axios';

const baseURL = 'https://fakestoreapi.com';
const instance: AxiosInstance = axios.create({
  baseURL
});

export default instance;
