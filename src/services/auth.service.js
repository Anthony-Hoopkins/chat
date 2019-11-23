import instance from './instance';
import { API } from '../constants';


export default class AuthService {
  static requestAccessToken() {
    return instance.post(API.GET_AUTH_TOKEN);
  }

  constructor() {
    this.token = '';
    this.setAuthToken();
  }

  getAuthToken() {
    return this.token;
  }

  setAuthToken() {
    AuthService.requestAccessToken()
      .then(({ data: token }) => {
        this.token = token;
        console.log(`Token has received: ${token}`);
      });
  }

}
