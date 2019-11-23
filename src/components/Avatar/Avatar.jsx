import React from 'react';
import './Avatar.scss';
import PropTypes from 'prop-types';

const Avatar = ({ image }) => (
  <div className="Avatar" style={{ backgroundImage: `url(${image})` }} />
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Avatar;