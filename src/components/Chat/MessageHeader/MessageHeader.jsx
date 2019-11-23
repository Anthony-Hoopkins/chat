import React from 'react';
import './MessageHeader.scss';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar/Avatar';
import Interlocutor from '../../../models/interlocutor';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';

const MessageHeader = ({ interlocutor }) => {
  return (
    <div className="MessageHeader">
      <div className="MessageHeader-avatar">
        <Avatar image={interlocutor.avatar || ''} />
      </div>
      <div className="MessageHeader-interlocutor">
        <p className="MessageHeader-interlocutorName">Interlocutor name</p>
        <p className="MessageHeader-interlocutorLastVisit">Last seen 25 minutes ago</p>
      </div>
      <div className="MessageHeader-themeToggle">
        <ThemeToggle onChange={console.log} />
      </div>
    </div>
  );
};

MessageHeader.propTypes = {
  interlocutor: PropTypes.objectOf(Interlocutor).isRequired,
};

export default MessageHeader;
