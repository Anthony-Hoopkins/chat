import instance from './instance';

export default class AuthService {
  static getToken() {
    return instance.post('auth/get-token').then(console.log);
  }
}
