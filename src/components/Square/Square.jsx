import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick} type="button">
    {value}
  </button>
);

export default Square;

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
