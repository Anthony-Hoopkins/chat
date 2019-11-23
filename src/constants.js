export const AUTH_API = {
  BASE_ENDPOINT: 'https://social-network.samuraijs.com/api/1.0/',
  GET_AUTH_TOKEN: 'auth/get-token',
};

export const MESSENGER_API = {
  BASE_ENDPOINT: 'http://messenger-hackathon.herokuapp.com',
  GET_CHATS: '/get-chats',
  GET_MESSAGES: '/get-messages',
  INIT_CHAT: '/init-chat',
};

export const SOCKET_HOOKS = {
  GET_CHATS_SUCCESS: 'get-chats-success',
  GET_MESSAGES_SUCCESS: 'get-messages-success',
  INIT_CHAT_SUCCESS: 'init-chat-success',
};
