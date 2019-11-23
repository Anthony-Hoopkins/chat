import React from 'react';
import './MessageStatus.scss';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import MessageStatusEnum from '../../../enums/message-status.enum';

const MessageStatus = ({ status }) => (
  <span className="MessageStatus">
    <Icon iconName="check" className={`MessageStatus-icon ${status !== MessageStatusEnum.Read ? 'notActive' : ''}`} />
    {(status === MessageStatusEnum.Read || status === MessageStatusEnum.Delivered)
    && <Icon iconName="check" className={`MessageStatus-icon ${status !== MessageStatusEnum.Read ? 'notActive' : ''}`} />}
  </span>
);

MessageStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default MessageStatus;
