import React from 'react';
import './Chat.scss';
import MessageHeader from './MessageHeader/MessageHeader';
import Messages from './Messages/Messages';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
  return (
    <div className="Chat">
      <MessageHeader/>
      <Messages/>
      <MessageInput/>
    </div>
  );
};
export default Chat;