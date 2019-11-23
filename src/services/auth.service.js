import instance from './instance';
import { AUTH_API } from '../constants';


class AuthService {
  static requestAccessToken() {
    return instance.post(AUTH_API.GET_AUTH_TOKEN);
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

const authService = new AuthService();
export default authService;
