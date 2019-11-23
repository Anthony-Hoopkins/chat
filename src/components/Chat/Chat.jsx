import React from 'react';
import './Chat.scss';
import MessageHeader from './MessageHeader/MessageHeader';
import Messages from './Messages/Messages';
import MessageInput from './MessageInput/MessageInput';

const interlocutor = { avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png' };

const Chat = () => (
  <div className="Chat">
    <div className="Chat-header">
      <MessageHeader interlocutor={interlocutor} />
    </div>
    <div className="Chat-messages">
      <Messages />
    </div>
    <div className="Chat-input">
      <MessageInput />
    </div>
  </div>
);
export default Chat;