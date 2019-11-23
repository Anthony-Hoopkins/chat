import io from 'socket.io-client';
import authService from './auth.service';
import { AUTH_API, MESSENGER_API, SOCKET_HOOKS } from '../constants';


class MessageService {
  constructor() {
    this.authInstance = authService;
  }

  getConversationsList() {
    const token = this.authInstance.getAuthToken();

    // const conversationsList = io.connect(MESSENGER_API.BASE_ENDPOINT);
    //
    // conversationsList.current.on(SOCKET_HOOKS.GET_CHATS_SUCCESS, (conversations) => {
    //   console.log(conversations);
    // });
  }

  getConversation() {

  }

  sendMessage() {

  }

  // TODO delete, edit message
}

const messagesService = new MessageService();
export default messagesService;
