import axios from 'axios/index';


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    // 'API-KEY': '8cb29b96-1ff9-457a-9229-34cee0202934',
    // "API-KEY": "4c2a720a-b6c7-4460-83f3-bfe52edab881"
  },
});

export default instance;
