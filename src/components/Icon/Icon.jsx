import React from 'react';
import './Icon.scss';
import PropTypes from 'prop-types';

const Icon = ({ iconName, className = '' }) => (
  <span className={`Icon ${className}`} style={{ WebkitMaskImage: `url(/icons/${iconName}.svg)` }} />
);

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
