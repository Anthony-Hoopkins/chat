import instance from './instance';
import { API } from '../constants';


export default class AuthService {

  static requestAccessToken() {
    return instance.post(API.GET_AUTH_TOKEN);
  }

  token = null;

  constructor() {
    this.setAuthToken();
  }

  setAuthToken() {
    return AuthService.requestAccessToken()
      .then(({ data: token }) => {
        this.token = token;
        console.log('Token has received: ' + token);
      });
  }

  getMessagesList() {

  }

  getConversation() {

  }

  sendMessage() {

  }

  // TODO delete, edit message
}
