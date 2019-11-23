import axios from 'axios/index';
import { API } from '../constants';


const instance = axios.create({
  withCredentials: true,
  baseURL: API.BASE_ENDPOINT,
  headers: {},
});

export default instance;
