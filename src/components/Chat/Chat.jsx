import React from 'react';
import './Chat.scss';
import MessageHeader from './MessageHeader/MessageHeader';
import Messages from './Messages/Messages';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => (
  <div className="Chat">
    <div className="Chat-header">
      <MessageHeader />
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