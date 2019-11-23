import React from 'react';
import './Message.scss';
import PropTypes from 'prop-types';
import MessageStatus from '../../MessageStatus/MessageStatus';
import MessageType from '../../../../enums/message-type.enum';

const Message = ({ message }) => (
  <div className={`Message ${message.type === MessageType.Outgoing ? 'right' : ''}`}>
    <p className="Message-text">{message.message}</p>
    <p className="Message-time">{message.date}</p>
    <div className="Message-status">
      <MessageStatus status={message.status} />
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.objectOf(Message).isRequired,
};

export default Message;
