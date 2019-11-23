import axios from 'axios/index';
import { AUTH_API } from '../constants';


const instance = axios.create({
  withCredentials: true,
  baseURL: AUTH_API.BASE_ENDPOINT,
  headers: {},
});

export default instance;
