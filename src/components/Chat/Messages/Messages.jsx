import React from 'react';
import './Messages.scss';
import Message from './Message/Message';
import MessageType from '../../../enums/message-type.enum';
import MessageStatus from '../../../enums/message-status.enum';

const messages = [
    { id: 0, message: 'Hi guyz', type: MessageType.Incoming, status: MessageStatus.Sending, date: '11:21' },
    { id: 1, message: 'Hello darkness', type: MessageType.Outgoing, status: MessageStatus.Sending, date: '11:21' },
    { id: 1, message: 'Hello darkness', type: MessageType.Outgoing, status: MessageStatus.Delivered, date: '11:21' },
    { id: 1, message: 'Hello darkness', type: MessageType.Outgoing, status: MessageStatus.Read, date: '11:21' },
  ]
;

const Messages = () => (
  <div className="Messages">
    {messages && messages.map((message, i) => <Message key={i} message={message} />)}
  </div>
);
export default Messages;
